import { useParams } from 'react-router-dom'
import s from './PostIdPage.module.css'
import { useEffect, useState } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { PostService } from '../../API/PostService'
import { Loader } from '../../components/UI/Loader/Loader'

export const PostIdPage = (props) => {
  const { id } = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPost, isPostLoading, error] = useFetching(async () => {
    const post = await PostService.getById(id)
    setPost(post)
  })
  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const comments = await PostService.getCommentsByPostId(id)
    setComments(comments)
  })

  useEffect(() => {
    fetchPost()
    fetchComments()
  }, [])

  return (
    <div className={s.postIdPage}>
      {isPostLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>
            {post.id}. {post.title}
          </h1>
          <p>{post.body}</p>
        </div>
      )}
      <hr />
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((c) => (
            <p key={c.id}>{c.body}</p>
          ))}
        </div>
      )}
    </div>
  )
}
