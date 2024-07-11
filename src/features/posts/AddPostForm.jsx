import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAllUsers } from "../users/usersSlice"
import { postAdded } from "./postsSlice"
import "./AddPostForm.css"

export default function AddPostForm() {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)
  console.log(users)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [userId, setUserId] = useState("")

  function onSavePostClicked() {
    if (title && content) {
      dispatch(postAdded(title, content, userId))
      setTitle("")
      setContent("")
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section className="AddPostForm-section">
      <h2 className="AddPostForm-title">Add a New Post</h2>
      <form>
        <input
          type="text"
          className="postTitle"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select onChange={(e) => setUserId(e.target.value)}>
          <option></option>
          {userOptions}
        </select>

        <textarea
          placeholder="Post content"
          className="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}
