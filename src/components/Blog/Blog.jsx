import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css'
import SideBar from '../SiderBar/SideBar';

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const [readTime,setreadTime]= useState("")
    const[bookmarked,setBookmarked]=useState([])
    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    // set-time part
    const handleTimeRead = (read_time)=>{
        const previousTime = JSON.parse(localStorage.getItem('read-time'))
        if(previousTime){
            const newTime = previousTime+read_time;
            localStorage.setItem('read-time',newTime);
            setreadTime(newTime)

        }
        else{
            localStorage.setItem('read-time',read_time)
            setreadTime(read_time)
        }
    }
    
    // book-marked part
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
                            handleTimeRead={handleTimeRead}
                            handleBookmarkedBlog={handleBookmarkedBlog}
                        ></SingleBlog>)
                    }
                </div>
                <div className='sidebar m-2 lg:mt-6'>
                    <SideBar
                    readTime = {readTime}
                    bookmarked = {bookmarked}
                    ></SideBar>
                </div>
            </div>
        </div>
    );
};

export default Blog;