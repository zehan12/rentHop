import React, { useState, useEffect } from 'react';function 
StickyHeader() { const [isSticky, setSticky] = useState(false);
     const handleScroll = () => { const windowScrollTop = window.scrollY;
        if (windowScrollTop > 10) { setSticky(true); }
         else {setSticky(false); }};
          useEffect(() => { window.addEventListener('scroll', handleScroll); return () => { window.removeEventListener('scroll', handleScroll); }; }, []); const items = [ { name: 'Home', link: '/' }, { name: 'About', link: '/about' }, { name: 'Contact', link: '/contact' } ]; const data = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ] 
          return ( <div className="App"> <header style={{ background: isSticky ? '#fff' : '', width: '100%', zIndex: '999',position:isSticky ?'fixed':'absolute' }}> {items.map(item => ( <a href={item.link} key={item.name}> {item.name} </a> ))} </header> <ul> {data.map((x) => { return (<li key={x}>{x}</li>) })} </ul> </div> );}
          
          
          export default StickyHeader;