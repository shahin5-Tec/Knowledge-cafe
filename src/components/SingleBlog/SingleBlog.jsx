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
              

            </div>
            <hr className='custom-divider' />
        </div>
    );
};

export default SingleBlog;