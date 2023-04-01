import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css'
import SideBar from '../SiderBar/SideBar';

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const[bookmarked,setBookmarked]=useState([])
    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    const handleBookmarkedBlog=(blog_title)=>{
        
        setBookmarked([...bookmarked, blog_title]);
    }
    return (
        <div>
            <div className='blog mt-5' >
                <div className=' blog-section  text-black-400'>
                    {
                        blogs.map(blog => <SingleBlog
                            key={blog.id}
                            blog={blog}
                            // handleMarkedAsRead={handleMarkedAsRead}
                            handleBookmarkedBlog={handleBookmarkedBlog}
                        ></SingleBlog>)
                    }
                </div>
                <div className='sidebar m-2 lg:mt-6'>
                    <SideBar
                    // readTime = {readTime}
                    bookmarked = {bookmarked}
                    ></SideBar>
                </div>
            </div>
        </div>
    );
};

export default Blog;