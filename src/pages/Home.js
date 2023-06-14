import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';

import PDF from './PDF'; // Replace './PDF' with the actual path to your PDF.jsx file

function Home() {
  return (
    <>
      <div className='w-screen h-screen'>
        <PDFViewer height={"100%"} width={"100%"}>
          {/* <PDF _data={data} _projectName={projectName} _academicYear={academicYear} _profName={profName} _subject={subject} _date={date} _branch={branch} _hodName={hodName} _semester={semester} /> */}
        </PDFViewer>
      </div>
    </>
  );
}

export default Home;
