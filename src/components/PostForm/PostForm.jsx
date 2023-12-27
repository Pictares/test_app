import { useState } from 'react'
import s from './PostForm.module.css'
import { MyInput } from '../UI/MyInput/MyInput'
import { MyButton } from '../UI/MyButton/MyButton'

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const onCreatePost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      ...post,
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form className={s.postForm}>
      <div>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Title"
        />
      </div>
      <div>
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Content"
        />
      </div>
      <MyButton onClick={onCreatePost}>Add post</MyButton>
    </form>
  )
}
