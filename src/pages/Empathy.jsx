import React from 'react'
import StickyDiv from '../component/StickyDiv';
import Feture from '../component/Feture';
import { useEffect, useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Empathy() {


    const canvasRef = useRef(null);

    const handleDownload = () => {
        const canvas = canvasRef.current;
        html2canvas(canvas).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'screen_content.png';
            link.click();
        });
    };

    useEffect(() => {
        document.body.style.height = '100vh';
        document.documentElement.style.height = '100vh';
    }, []);

    const [newDataArray, setNewDataArray] = useState([
        [4, '#00DFA2'],
        [4, '#F6FA70'],
        [4, '#FBB454'],
    ]);

    const getData = (data, index) => {
        const updatedDataArray = [...newDataArray];
        updatedDataArray[index] = data;
        setNewDataArray(updatedDataArray);
    };

    let style = {
        transitionProperty: 'transform',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease',
    };
    return (
        <>

            <FontAwesomeIcon onClick={handleDownload} icon={faDownload} size='2xl' className='absolute right-[40px] top-24 hover:cursor-pointer 890px:hidden' />

            <p className='h-screen w-screen sm:hidden flex items-center justify-center text-[25px]'>Use in Desktop Mode</p>
            <div ref={canvasRef} className='p-2 w-min h-min 990px:scale-[0.9] 990px:translate-x-[-50px] 890px:hidden' style={style}>
                <div className='h-[1247px] w-[971px] border-2  flex-col box-border'>
                    <div className='h-[1184px] w-[921px]  mx-auto m-[20px] flex-col box-border'>

                        {/* // - First Row Start*/}
                        <div className='h-[100px] w-[919px] border-b-[2px] box-border'></div>
                        {/* // - First Row End*/}

                        {/* // - Second Row Start */}
                        <div className='h-[231px] w-[919px] border-b-[2px] box-border flex'>

                            {/* //! User */}
                            <div className='h-full w-[50%] border-r-[2px] border-l-[2px] box-border relative'>
                                <p className='mt-2 px-2 flex justify-between w-[100%]'>
                                    User : <Feture getData={(data) => getData(data, 0)}></Feture>
                                </p>
                                <StickyDiv id='EMPATHY_0_' width='w-[300px]' height='h-[35px]' newData={newDataArray[0]}></StickyDiv>
                            </div>

                            {/* //! StackHolder */}
                            <div className='h-full w-[50%] box-border border-r-[2px]  relative'>
                                <p className='mt-2 px-2 flex justify-between w-[100%]'>
                                    StackHolder : <Feture getData={(data) => getData(data, 1)}></Feture>
                                </p>
                                <StickyDiv id='EMPATHY_1_' width='w-[300px]' height='h-[35px]' newData={newDataArray[1]}></StickyDiv>
                            </div>

                        </div>  {/* // - Second Row End */}

                        {/* // - Third Row Start */}
                        <div className='h-[225px] w-[919px] flex'>

                            {/* //! Activities */}
                            <div className='h-full w-[100%] border-b-[2px] border-r-[2px] border-l-[2px] relative'>
                                <p className='mt-2 px-2 flex justify-between w-[100%]'>
                                    Activity : <Feture getData={(data) => getData(data, 2)}></Feture>
                                </p>
                                <StickyDiv id='EMPATHY_2_' width='w-[300px]' height='h-[35px]' newData={newDataArray[2]}></StickyDiv>
                            </div>
                        </div>
                        {/* // - Third Row End */}

                        {/* // - Fourth Row Start */}
                        <div className='h-[161px] w-[919px] flex'>

                            {/* //! Story Bording Happy-1 */}
                            <div className='h-full w-[100%] border-b-[2px] border-r-[2px] border-l-[2px] relative'>
                                <p className='mt-1 px-2 flex justify-between w-[100%] font-bold text-xl'>
                                    STORY BOARDING
                                </p>
                                <p className='mt-1 px-2 flex justify-between w-[100%]'>
                                    Happy :
                                </p>
                                <textarea id="" className='w-[95%] h-[50%] px-4 mt-2 py-1 mx-[2.5%]  resize-none' spellCheck="false"></textarea>
                            </div>
                        </div>
                        {/* // - Fourth Row End */}

                        {/* // - Fifth Row Start */}
                        <div className='h-[161px] w-[919px] flex'>

                            {/* //! Story Bording Happy-2 */}
                            <div className='h-full w-[100%] border-b-[2px] border-r-[2px] border-l-[2px] relative'>

                                <p className='mt-2 px-2 flex justify-between w-[100%]'>
                                    Happy :
                                </p>
                                <textarea id="" className='w-[95%] h-[50%] px-4 mt-2 py-1 mx-[2.5%]  resize-none' spellCheck="false"></textarea>

                            </div>
                        </div>
                        {/* // - Fifth Row End */}

                        {/* // - Sixth Row Start */}
                        <div className='h-[161px] w-[919px] flex'>

                            {/* //! Story Bording Sad-1*/}
                            <div className='h-full w-[100%] relative border-b-[2px] border-r-[2px] border-l-[2px]'>
                                <p className='mt-2 px-2 flex justify-between w-[100%]'>
                                    Sad :
                                </p>
                                <textarea id="" className='w-[95%] h-[50%] px-4 mt-2 py-1 mx-[2.5%]  resize-none' spellCheck="false"></textarea>

                            </div>
                        </div>
                        {/* // - Sixth Row End */}

                        {/* // - Seventh Row Start */}
                        <div className='h-[161px] w-[919px] flex'>

                            {/* //! Story Bording Sad-1 */}
                            <div className='h-full w-[100%] relative border-b-[2px] border-r-[2px] border-l-[2px]'>
                                <p className='mt-2 px-2 flex justify-between w-[100%]'>
                                    Sad :
                                </p>
                                <textarea id="" className='w-[95%] h-[50%] px-4 mt-2 py-1 mx-[2.5%]  resize-none' spellCheck="false"></textarea>

                            </div>
                        </div>
                        {/* // - Seventh Row End */}

                    </div>
                </div>
            </div>
        </>

    )
}

export default Empathy
