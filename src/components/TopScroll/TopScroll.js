import React, { useEffect, useState } from 'react';
import './TopScroll.css'
const TopScroll = () => {
    const [top, setTop] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY)
            if (window.scrollY > 400) {
                setTop(true)
            } else {
                setTop(false)
            }
        })
    }, [])

    const scrollBtn = () => {
        window.scrollTo({
            top: '8rem',
            behavior: 'auto'
        })
    }

    return (
        <div>
            {
                top && <button onClick={scrollBtn} className='scroll-btn'><svg xmlns="http://www.w3.org/2000/svg" width={'3rem'} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg></button> 
            }
        </div>
    );
};

export default TopScroll;