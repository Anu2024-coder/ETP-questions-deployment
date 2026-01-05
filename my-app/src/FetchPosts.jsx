import React from "react";
import {useEffect, useState} from "react";
function FetchPosts(){
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>response.json())
        .then((data)=>{
            setPosts(data.slice(0,5));
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        });
    },[]);

    if(loading){
        return<h3>Loading data...</h3>;
    }

    return (
        <div>
            <h2>Posts list</h2>
            <ul>
                {posts.map((post)=>(
                    <li key ={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FetchPosts;