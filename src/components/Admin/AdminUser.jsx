import React from 'react'
import { useGetUsersQuery } from '../../features/users/user'

function AdminUser() {
    const { data, error, isLoadin } = useGetUsersQuery();
    console.log("users data ", data1);
  return (
    <div>AdminUser</div>
  )
}

export default AdminUser