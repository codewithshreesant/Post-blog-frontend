import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AdminDataProtect({ children }) {
    //   const user = useSelector((state) => state.user);
    let admin = localStorage.getItem('adminData');
    let actualAdmin = JSON.parse(admin);
    console.log("Actual Admin: ", actualAdmin);
    const navigate = useNavigate();

    useEffect(() => {
        if (actualAdmin) {
            // User is admin, do nothing here. The children will be rendered.
        } else {
            navigate('/login');
        }
    }, [actualAdmin, navigate]); // Add user and navigate as dependencies
    if (actualAdmin) {
        return children;
    }
    return null; // Return null when not admin (useEffect handles the navigation)
}

export default AdminDataProtect;