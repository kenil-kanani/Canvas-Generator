import React, { useState, useEffect } from 'react';
import '../style/style1.css';
import { PDFViewer } from '@react-pdf/renderer';
import PDF from './PDF';

const Info = (props) => {
    return (
        <div className="form-group">
            <label id='report-id' htmlFor={props._id}>{props._lable}</label>
            <input
                type="text"
                id={props._id}
                className="input-field"
                value={props._defaultValue}
                onChange={(e) => props._setInfo(e.target.value)}
            />
        </div>
    );
};

const Report = () => {
    const [data, setData] = useState(() => {
        const storedData = localStorage.getItem('reportData');
        return storedData ? JSON.parse(storedData) : [
            {
                fullName: 'Kanani Kenil Arvindbhai',
                erNo: '210210107035',
            },
            {
                fullName: 'Goyani Krish Kamleshbhai',
                erNo: '210210107041',
            },
            {
                fullName: 'Viradiya Krish Jiteshbhai',
                erNo: '210210107034',
            },
            {
                fullName: 'Joshi Amisha Rajeshbhai',
                erNo: '210210107033',
            },
        ];
    });
    const [projectName, setProjectName] = useState(() => localStorage.getItem('projectName') || 'Sorting Algorithm Visualizer');
    const [academicYear, setAcademicYear] = useState(() => localStorage.getItem('academicYear') || '2022/2023');
    const [profName, setProfName] = useState(() => localStorage.getItem('profName') || 'Kamlesh Makvana');
    const [subject, setSubject] = useState(() => localStorage.getItem('subject') || 'Design Engineering(1A)');
    const [date, setDate] = useState(() => localStorage.getItem('date') || '08/01/2023');
    const [branch, setBranch] = useState(() => localStorage.getItem('branch') || 'Computer Engineering');
    const [hodName, setHodName] = useState(() => localStorage.getItem('hodName') || 'K. P. KANDORIYA');
    const [semester, setSemester] = useState(() => localStorage.getItem('semester') || '4th');

    useEffect(() => {
        localStorage.setItem('reportData', JSON.stringify(data));
    }, [data]);

    useEffect(() => {
        localStorage.setItem('projectName', projectName);
    }, [projectName]);

    useEffect(() => {
        localStorage.setItem('academicYear', academicYear);
    }, [academicYear]);

    useEffect(() => {
        localStorage.setItem('profName', profName);
    }, [profName]);

    useEffect(() => {
        localStorage.setItem('subject', subject);
    }, [subject]);

    useEffect(() => {
        localStorage.setItem('date', date);
    }, [date]);

    useEffect(() => {
        localStorage.setItem('branch', branch);
    }, [branch]);

    useEffect(() => {
        localStorage.setItem('hodName', hodName);
    }, [hodName]);

    useEffect(() => {
        localStorage.setItem('semester', semester);
    }, [semester]);

    const handleDataChange = (index, field, value) => {
        const newData = [...data];
        newData[index][field] = value;
        setData(newData);
    };

    const handleAddData = () => {
        setData([...data, { fullName: '', erNo: '' }]);
    };

    return (
        <>
            <div className="container">
                <Info _id="projectName" _defaultValue={projectName} _lable="Project Name :" _setInfo={setProjectName} />
                <Info _id="academicYear" _defaultValue={academicYear} _lable="Academic Year :" _setInfo={setAcademicYear} />
                <Info _id="profName" _defaultValue={profName} _lable="Professor Name :" _setInfo={setProfName} />
                <Info _id="subject" _defaultValue={subject} _lable="Subject Name :" _setInfo={setSubject} />
                <Info _id="date" _defaultValue={date} _lable="Date :" _setInfo={setDate} />
                <Info _id="branch" _defaultValue={branch} _lable="Branch Name :" _setInfo={setBranch} />
                <Info _id="hodName" _defaultValue={hodName} _lable="HOD Name :" _setInfo={setHodName} />
                <Info _id="semester" _defaultValue={semester} _lable="Semester :" _setInfo={setSemester} />

                {data.map((item, index) => (
                    <div className="form-group" key={index}>
                        <label htmlFor={`fullName${index}`}>Full Name:</label>
                        <input
                            type="text"
                            id={`fullName${index}`}
                            className="input-field"
                            value={item.fullName}
                            onChange={(e) => handleDataChange(index, 'fullName', e.target.value)}
                        />

                        <label htmlFor={`erNo${index}`}>ER No:</label>
                        <input
                            type="text"
                            id={`erNo${index}`}
                            className="input-field"
                            value={item.erNo}
                            onChange={(e) => handleDataChange(index, 'erNo', e.target.value)}
                        />
                    </div>
                ))}

                <button id="addData" onClick={handleAddData}>
                    Add Data
                </button>
            </div>

            <div className='w-screen h-screen'>
                <PDFViewer height={"100%"} width={"100%"}>
                    <PDF _data={data} _projectName={projectName} _academicYear={academicYear} _profName={profName} _subject={subject} _date={date} _branch={branch} _hodName={hodName} _semester={semester} />
                </PDFViewer>
            </div>
        </>
    );
};

export default Report;
