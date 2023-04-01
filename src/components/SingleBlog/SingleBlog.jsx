import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import './SingleBlog.css'

const SingleBlog = ({ blog,handleBookmarkedBlog}) => {
    const { id, author_name, blog_title, authorImg, coverImg, read_time, published_date } = blog;


    return (
        <div>
            <div className='single-card p-5'>
                <div>
                    <img className='rounded-3xl lg: h-96  w-full' src={coverImg} alt="" />
                </div>
                <div className='flex justify-between  items-center mt-5'>
                    <div className='flex items-center  '>
                        <div>
                            <img className='w-10 rounded-full ' src={authorImg} alt="" />
                        </div>
                        <div className='ps-5'>
                            <h5 className='font-bold text-lg'>{author_name}</h5>
                            <p>{published_date}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <p>{read_time} min read</p>
                        <p onClick={()=>handleBookmarkedBlog(blog_title)}><FontAwesomeIcon icon={faBookBookmark} /></p>
                    </div>
                   

                </div>

                <div className='my-3'>
                    <h2 className='lg:text-4xl font-bold my-3 '>{blog_title}</h2>
                </div>
                <div className='text-blue-700 underline '>
                    {/* <a onClick={() => handleMarkedAsRead(read_time)} className='cursor-pointer' href="">Mark as read</a> */}
                </div>

            </div>
            <hr className='custom-divider' />
        </div>
    );
};

export default SingleBlog;