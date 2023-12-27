import { useEffect, useState } from 'react'
import s from './Post.module.css'
import { PostList } from '../../components/PostList/PostList'
import { PostForm } from '../../components/PostForm/PostForm'
import { PostFilter } from '../../components/PostFilter/PostFilter'
import { MyModal } from '../../components/UI/MyModal/MyModal'
import { MyButton } from '../../components/UI/MyButton/MyButton'
import { useSortedAndSearchedPosts } from '../../hooks/usePosts'
import { PostService } from '../../API/PostService'
import { Loader } from '../../components/UI/Loader/Loader'
import { useFetching } from '../../hooks/useFetching'
import { getPageCount, getPagesArray } from '../../utils/pages'
import { Pagination } from '../../components/UI/Pagination/Pagination'
import { MySelect } from '../../components/UI/MySelect/MySelect'

export const Posts = (props) => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [fetchPosts, isLoading, error] = useFetching(async () => {
    const result = await PostService.getAll(limit, page)
    const totalCount = result.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
    setPosts(result.data)
  })

  useEffect(() => {
    fetchPosts()
  }, [page, limit])

  const sortedAndSearchedPosts = useSortedAndSearchedPosts(
    posts,
    filter.sort,
    filter.query
  )

  const addPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (postId) => {
    setPosts([...posts.filter((p) => p.id !== postId)])
  }

  return (
    <div className={s.posts}>
      <MyButton onClick={() => setModal(true)}>Create post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={addPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        onChange={(limit) => setLimit(limit)}
        defaultValue="Per page"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 15, name: '15' },
          { value: -1, name: 'All' },
        ]}
      />
      {error && <div>{error}</div>}
      {!isLoading ? (
        <PostList removePost={removePost} posts={sortedAndSearchedPosts} />
      ) : (
        <Loader />
      )}
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  )
}
