import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css'

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div className='blog mt-5' >
                <div className=' blog-section  text-black-400'>
                    {
                        blogs.map(blog => <SingleBlog
                            key={blog.id}
                            blog={blog}
                        ></SingleBlog>)
                    }
                </div>
                <div>
                    {/* <h2>side part</h2> */}
                </div>
            </div>
        </div>
    );
};

export default Blog;