import React from 'react';
import { useGetPostsQuery } from '../../features/blogs/blogApi';

function AdminBlog() {
  const { data, error, isLoading } = useGetPostsQuery();
  const blogsData = data?.data;

  if (isLoading) {
    return <div>Loading...</div>; // Or a spinner
  }

  if (error) {
    return <div>Error loading blogs.</div>; // Or an error message
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Blogs</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Title</th>
              <th className="py-2 px-4 border-b text-left">Description</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {blogsData?.map((blog, index) => (
              <tr key={blog.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="py-2 px-4 border-b">{blog.title}</td>
                <td className="py-2 px-4 border-b">{blog.description}</td>
                {/* Add more table data cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminBlog;