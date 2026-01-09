import React, {useState} from "react";

function UpdatePost(){
    const [postId, setPostId]=useState("");
    const [title, setTitle]=useState("");
    const [body, setBody]=useState("");
    const [message, setMessage]=useState("");

    const fetchPost=async()=>{
        if(!postId){
            alert("Please enter post id");
            return;
        }

        const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data=await response.json();

        setTitle(data.title);
        setBody(data.body);
    };

    const updatePost=async(e)=>{
        e.preventDefault();

        const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
            {
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    id:postId,
                    title:title,
                    body:body,
                    userId:1,
                }),
            }
        );

        const updatedData=await response.json();
        setMessage("Post updated successfully");
        console.log(updatedData);
    };

    return(
        <div style={{padding:"20px"}}>
            

            <input type="number" 
            placeholder="Enter Post ID" 
            value={postId} 
            onChange={(e)=>setPostId(e.target.value)}>
            </input>
            <button onClick={fetchPost}>Fetch Post</button>

            <hr/>
            <h2>Update post</h2>
            <form onSubmit={updatePost}>
                <div>
                    <label>Title:</label>
                    <br></br>
                    <input type="text"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}>
                    </input>
                </div>
                <br></br>

                <div>
                    <label>Body:</label>
                    <br></br>
                    <textarea
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}>
                    </textarea>
                </div>
                 <br></br>
                <button type="submit">Update Post</button>
            </form>
             <p style={{color:"green"}}>{message}</p>
        </div>
    );
}

export default UpdatePost;