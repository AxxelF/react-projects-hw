const PostItem = ({ text, author, title, createdAt }) => {
    return (
        <div className="post">
            <h2>{title}</h2>
            <span>{author}</span>
            <p>{text}</p>
            <b>Created at: {createdAt}</b>
      </div>
    )
}

export default PostItem