const Post = (props) => {
    return (
        <div className="post">
            <h3>{props.title}</h3>
            
            <div className="forumContent">
                <p>{props.authorText}</p>
            </div>

            <div className="forumContent">
                <p>{props.replyText}</p>
            </div>
        </div>
    );
}

export default Post;