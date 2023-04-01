import React, { useEffect, useState } from 'react';

import './SideBar.css'

const SideBar = ({readTime,bookmarked}) => {
    const [getreadTime,setgetreadTime]= useState(readTime)
    const [count,setCount]=useState(0)
    useEffect(()=>{
        const getReadTime = JSON.parse(localStorage.getItem('read-time'));
        setgetreadTime(getReadTime);
    },[readTime])
    useEffect (()=>{
        setCount(bookmarked.length)
    },[bookmarked])
    const clearSpentTime = (value) => {
        localStorage.clear();
        setgetreadTime(value);
    }
    return (
        <div>
             <div className="spent-time text-center">
                {/* <h2>Spent time on read:{ getreadTime} min</h2> */}
                <h2>Spent time on read: {getreadTime ? getreadTime : 0} min</h2>
            </div>
            <div className='bookmarked-blog mt-5 p-7'>
                <h2>Bookmarked Blogs:{count}</h2>
               
                 {
                    bookmarked.map((bookmark, index) => (
                        <div className='bookmarked-text' key={index}>
                            {bookmark}
                        </div>
                    ))
                }
            </div>
            <div className='text-center mt-2'>
                <button className='btn btn-secondary' onClick={() => clearSpentTime(0)}>Clear Spent Time</button>
            </div>
           
        </div>
    );
};

export default SideBar;