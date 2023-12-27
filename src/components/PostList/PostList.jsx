import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from 'react-transition-group'
import { PostItem } from '../PostItem/PostItem'
import s from './PostList.module.css'
import './PostList.css'

export const PostList = ({ posts, removePost }) => {
  if (!posts.length)
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        Posts not found
      </div>
    )

  return (
    <div className={s.postList}>
      <h1>Post list</h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem removePost={removePost} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}
