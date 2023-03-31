import React from 'react';
import './SingleBlog.css'

const SingleBlog = (props) => {
    const { id, author_name, blog_title, authorImg, coverImg, read_time, published_date } = props.blog
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

                    <div>
                        <p>{read_time} min read</p>
                    </div>
                </div>

                

            </div>
            <hr className='custom-divider' />
        </div>
    );
};

export default SingleBlog;