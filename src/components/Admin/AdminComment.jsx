
import React from 'react'
import { useGetCommentsQuery } from '../../features/comments/commentApi'

function AdminComment() {
    const { data, error, isLoading } = useGetCommentsQuery();
    console.log(" comments data ", data);
    const commentsData = data?.data;
  return (
    <div>
        <h1>Comments</h1>
        {
            data && commentsData.map((comment, index)=>{
                return <div>
                    <h1>{comment.text}</h1>
                </div>
            })
        }
    </div>
  )
}

export default AdminComment