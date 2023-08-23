


function Post ({title, content}) {
    return (
        <div className="post">
            <h1>{title}</h1>
            <p>{content}</p>
            <button>Eliminar</button>
        </div>
    )
}

export default Post;