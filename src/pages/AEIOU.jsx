import StickyDiv from '../component/StickyDiv';
import Feture from '../component/Feture';
import html2canvas from 'html2canvas';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const AEIOU = () => {
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

  // useEffect(() => {
  //   document.body.style.height = '100vh';
  //   document.documentElement.style.height = '100vh';
  // }, []);

  const [newDataArray, setNewDataArray] = useState([
    [5, '#00DFA2'],
    [5, '#F6FA70'],
    [5, '#FBB454'],
    [5, '#79E0EE'],
    [5, '#98EECC'],
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

      <FontAwesomeIcon onClick={handleDownload} icon={faDownload} size='2xl' className='absolute right-[40px] top-24 hover:cursor-pointer 890px:hidden'  />

      <p className='h-screen w-screen sm:hidden flex items-center justify-center text-[25px]'>Use in Desktop Mode</p>
      {/* // - Canvas */}
      <div  ref={canvasRef}  className='p-2 w-min h-min 1270px:scale-[0.9] 1270px:transition-all 1270px:translate-x-[-50px] 1160px:scale-[0.8] 1160px:translate-x-[-125px] 1020px:scale-[0.7] 1020px:translate-x-[-190px] 890px:hidden' style={style}>
        <div className='h-[700px] w-[1254px] border-2  flex-col box-border'>

          {/* // - First Row Start*/}
          <div className='h-[99px] w-[1252px] border-b-[2px] box-border'></div>
          {/* // - First Row End*/}

          {/* // - Second Row Start */}
          <div className='h-[286px] w-[1252px] border-b-[2px] box-border flex'>

            {/* //! Environment */}
            <div id='environment' className='h-full w-[33%] border-r-[2px] box-border relative'>
              <p className='mt-2 px-2 flex justify-between w-[100%]'>
                Environment : <Feture getData={(data) => getData(data, 0)}></Feture>
              </p>
              <StickyDiv id='AEIOU_0_' width='w-[300px]' height='h-[35px]' newData={newDataArray[0]}></StickyDiv>
            </div>

            {/* //! Interaction */}
            <div id='interaction' className='h-full w-[33%] box-border relative'>
              <p className='mt-2 px-2 flex justify-between w-[100%]'>
                Interaction : <Feture getData={(data) => getData(data, 1)}></Feture>
              </p>
              <StickyDiv id='AEIOU_1_' width='w-[300px]' height='h-[35px]' newData={newDataArray[1]}></StickyDiv>
            </div>

            {/* //! Objects */}
            <div id='objects' className='h-full w-[33%] border-l-[2px] box-border relative'>
              <p className='mt-2 px-2 flex justify-between w-[103%]'>
                Objects : <Feture getData={(data) => getData(data, 2)}></Feture>
              </p>
              <StickyDiv id='AEIOU_2_' width='w-[300px]' height='h-[35px]' newData={newDataArray[2]}></StickyDiv>
            </div>

          </div> {/* // - Second Row End */}

          {/* // - Third Row Start */}
          <div className='h-[310px] w-[1252px] flex'>

            {/* //! Activity */}
            <div id='activity' className='h-full w-[50%] border-r-[2px] relative'>
              <p className='mt-2 px-2 flex justify-between w-[100%]'>
                Activity : <Feture getData={(data) => getData(data, 3)}></Feture>
              </p>
              <StickyDiv id='AEIOU_3_' width='w-[300px]' height='h-[35px]' newData={newDataArray[3]}></StickyDiv>
            </div>

            {/* //! Users */}
            <div id='users' className='h-full w-[50%] relative'>
              <p className='mt-2 px-2 flex justify-between w-[100%]'>
                Users : <Feture getData={(data) => getData(data, 4)}></Feture>
              </p>
              <StickyDiv id='AEIOU_4_' width='w-[300px]' height='h-[35px]' newData={newDataArray[4]}></StickyDiv>
            </div>

          </div> {/* // - Third Row End */}

        </div> {/* // - Canvas End */}
      </div>
    </>
  );
};

export default AEIOU;
