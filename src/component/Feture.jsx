import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faXmark } from '@fortawesome/free-solid-svg-icons';

function Feture({ getData }) {

    const [isTrue, setisTrue] = useState(false);
    const [stickyCount, setStickyCount] = useState('');
    const [bgColor, setBgColor] = useState(null);
    const [icon1, setIcon1] = useState(faSliders);

    let submitButtonHandler = () => {
        getData([stickyCount, bgColor]);
        setisTrue(!isTrue);
        setIcon1(faSliders);
    }

    // const [bl, setBl] = useState(true);

    const clickHandler = () => {
        // setBl(!bl);
        setisTrue(!isTrue);
        if (icon1 == faSliders) setIcon1(faXmark)
        else setIcon1(faSliders)
    }

    return (
        <>
            {<FontAwesomeIcon onClick={clickHandler} icon={icon1} fade />}
            {/* {!bl && <FontAwesomeIcon onClick={clickHandler} icon={faXmark} fade />} */}
            {
                isTrue &&
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "#27374D", color: "white" }} className='p-5 rounded-[10px] absolute right-2 top-10'>
                    <div className='flex gap-2'>
                        <label>Sticky Notes : </label>
                        <input onChange={(event) => setStickyCount(event.target.value)} type='number' maxLength={4} style={{ backgroundColor: "transparent" }} className='border-2 border-[#fff] (condition) {
                            
                        } focus:border-amber-400'></input>
                    </div>
                    <div className='flex gap-2'>
                        <label>Color : </label>
                        <input onChange={(event) => setBgColor(event.target.value)} type='color' maxLength={4}></input>
                    </div>
                    <button className='border-1' onClick={submitButtonHandler}>Submit</button>
                </div>
            }
        </>
    )
}

export default Feture
