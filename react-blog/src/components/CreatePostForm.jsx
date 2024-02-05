import React from 'react'
import { useState } from 'react'

const CreatePostForm = ({ handleAddPost }) => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [text, setText] = useState("")

  const handleSubmitForm = (event) => {
    event.preventDefault()
    handleAddPost(title, author, text)
    setTitle("")
    setAuthor("")
    setText("")
  }

    return (
        <form action="">
            <div className="form-input">
                <label htmlFor="">Post Title:</label>
                <input 
                    type="text" id='title' 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}
                />
            </div>
            <div className="form-input">
                <label htmlFor="">Post Author:</label>
                <input 
                    type="text" 
                    id='author' 
                    onChange={(e) => setAuthor(e.target.value)} 
                    value={author}
                />              
            </div>
            <div className="form-input">
                <label htmlFor="">Post Text:</label>
                <textarea 
                    id="text" 
                    cols="30" 
                    rows="10" 
                    onChange={(e) => setText(e.target.value)} 
                    value={text}
                ></textarea>
            </div>
            <button onClick={(e) => handleSubmitForm(e)}>Create Post</button>
        </form>
    )
}

export default CreatePostForm