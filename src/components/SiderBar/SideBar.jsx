import React, { useEffect, useState } from 'react';
import './SideBar.css'

const SideBar = ({bookmarked}) => {
    const [count,seCount]=useState(0)
    useEffect (()=>{
        seCount(bookmarked.length)
    },[bookmarked])
    return (
        <div>
             <div className="spent-time text-center">
                <h2>Spent time on read: min</h2>
            </div>
            <div className='bookmarked-blog mt-5 p-7'>
                <h2>Bookmarked Blogs:{count}</h2>
                {
                    bookmarked.map(bookmark => <>
                        <div className='bookmarked-text' key={bookmark}>
                            {bookmark}
                        </div>
                    </>)
                }
            </div>
           
        </div>
    );
};

export default SideBar;