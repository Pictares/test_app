import { useNavigate } from 'react-router-dom'
import { MyButton } from '../UI/MyButton/MyButton'
import s from './PostItem.module.css'
import { useState } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { PostService } from '../../API/PostService'

export const PostItem = ({ post, removePost }) => {
  const router = useNavigate()

  return (
    <div className={s.postItem}>
      <div className={s.content}>
        <strong>
          {post.id}. {post.title}
        </strong>
        <p>{post.body}</p>
      </div>
      <div className={s.btns}>
        <MyButton onClick={() => removePost(post.id)}>Delete</MyButton>
        <MyButton onClick={() => router(`/posts/${post.id}`)}>Open</MyButton>
      </div>
    </div>
  )
}
