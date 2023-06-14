import React, { useEffect, useState } from 'react'
import StickyNote from './StickyNote';

function StickyDiv({ width, height, newData, id }) {

    const [stickyCount, setStickyCount] = useState(localStorage.getItem(id+'Count')||newData[0]);
    const [bgColor, setBgColor] = useState(localStorage.getItem(id+'Color')||newData[1]);

    useEffect(() => {
        setStickyCount(newData[0]);
    }, [newData[0]]);

    useEffect(() => {
        setBgColor(newData[1]);
    }, [newData[1]]);

    useEffect(() => {
        // Save stickyCount and bgColor to local storage
        localStorage.setItem(id+'Count', stickyCount);
        localStorage.setItem(id+'Color', bgColor);
      }, [stickyCount, bgColor]);
    
      useEffect(() => {
        // Fetch stickyCount and bgColor from local storage on component mount
        const savedStickyCount = localStorage.getItem(id+'Count');
        const savedBgColor = localStorage.getItem(id+'Color');
    
        if (savedStickyCount !== null) {
          setStickyCount(savedStickyCount);
        }
    
        if (savedBgColor !== null) {
          setBgColor(savedBgColor);
        }
      }, []);

    let arr = [];
    for (let index = 0; index < stickyCount; index++) {
        let _id = id + index.toString();
        arr.push(<StickyNote key={index} id={_id} bgColor={bgColor} width={width} height={height}></StickyNote>)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '89%', justifyContent: "center", alignItems: "center", gap: "8px" }} >
            {arr}
        </div>
    )
}

export default StickyDiv