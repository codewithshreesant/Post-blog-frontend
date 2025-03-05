
import React from 'react'
import { useRecommendPostsQuery } from '../../features/blogs/blogApi';

function RecommendPost({postId}) {
    console.log("postId ", postId);
    const { data, error, isLoading } = useRecommendPostsQuery(postId);
    console.log("Recommended Posts ", data);
    const recommendPost = data?.data;
  return (
    <div className='w-[20vw] flex flex-col gap-[0.8rem]'>
        <h1 className='text-[1.2rem] font-bold'>
            Recommended Posts
        </h1>
        {  
            data && recommendPost.map((post, index)=>{
                return <div>
                    <h1 className='font-bold'>{post.title}</h1>
                    <img src={post.image} alt="recommended post image" className='h-[120px] w-[220px]' />
                    <p>{(post.description).slice(0,50)}...</p>
                </div>
            })
        }
    </div>
  )
}

export default RecommendPost;