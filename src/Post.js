const Post = (props) => {
    return (
        <div className="post" style={{borderStyle: "solid", borderWidth: "1px", borderColor:"#5896C7",borderRadius:"8px",backgroundColor:"#c7fff9"}}>
            <h3 style={{color:"#5896C7"}}>{props.title}</h3>
            
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