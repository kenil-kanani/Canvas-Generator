import { Page, Image, Text, Document, Font, StyleSheet, View } from "@react-pdf/renderer";
// import ReactPDF from "@react-pdf/renderer";
import TimesNewRomanFont from '../fonts/timesnewroman.ttf'
import TimesNewRomanFontBold from '../fonts/timesnewromanbold.ttf'
import gec_logo from '../assets/gec_bvn_logo.png'
import gtu_logo from '../assets/gtu_logo.png'
import { useState } from "react";


Font.register({ family: 'Times New Roman', src: TimesNewRomanFont });
Font.register({ family: 'Times New Roman Bold', src: TimesNewRomanFontBold });

const styles = StyleSheet.create({
    page: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 85,
        fontFamily: "Times New Roman"
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },

});

const PDF = (props) => {
    const [data, setData] = useState(props._data);
    const [projectName, setProjectName] = useState(props._projectName);
    const [profName, setProfName] = useState(props._profName);
    const [subject, setSubject] = useState(props._subject);
    const [date, setDate] = useState(props._date);
    const [branch, setBranch] = useState(props._branch);
    const [semester, setSemester] = useState(props._semester);
    const [hodName, setHodName] = useState(props._hodName);
    const [academicYear, setAcademicYear] = useState(props._academicYear);

    let name = (data.map((item) => {
        return (
            <View style={{ width: '300px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '3px' }}>
                <Text>{item.fullName}</Text>
                <Text>{item.erNo}</Text>
            </View>
        )
    }))

    return (
        <Document>
            <Page size={"A4"} style={{
                paddingTop: 35,
                paddingBottom: 65,
                paddingHorizontal: 35,
                fontFamily: "Times New Roman"
            }}>

                <Text style={{ fontSize: "18", fontFamily: 'Times New Roman Bold', textAlign: "center", marginTop: "60px" }} >GUJARAT TECHNOLOGICAL UNIVERSITY</Text>
                <Text style={{ fontSize: "13", textAlign: "center", marginTop: "5px" }} >Chandkheda, Ahmadabad Affiliated</Text>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: "20px" }}>
                    <Image
                        style={{
                            height: "110px",
                            width: "110px"
                        }}
                        src={gtu_logo}
                    />
                    <Image
                        style={{
                            height: "110px",
                            width: "110px"
                        }}
                        src={gec_logo}
                    />
                </div>
                <Text style={{ fontSize: "14", fontFamily: 'Times New Roman Bold', textAlign: "center", marginTop: "5px", marginBottom: '10px' }}>GOVERNMENT ENGINEERING COLLEGE, BHAVNAGAR</Text>
                <Text style={{ fontSize: "11", textAlign: "center", marginBottom: '8px' }}>A Report on: -</Text>
                <Text style={{ fontSize: "18", fontFamily: 'Times New Roman Bold', textAlign: "center", marginBottom: '8px' }}>{projectName}</Text>
                <Text style={{ fontSize: "11", textAlign: "center", marginBottom: '8px' }}>Under Subject</Text>
                <Text style={{ fontSize: "14", fontWeight: "ultrabold", textAlign: "center", marginBottom: '8px' }}>DESIGN ENGINEERING -1A</Text>
                <Text style={{ fontSize: "11", textAlign: "center", marginBottom: '8px' }}>B.E. II SEMESTER III</Text>
                <Text style={{ fontSize: "11", textAlign: "center", marginBottom: '8px' }}>(COMPUTER ENGINEERING)</Text>

                <table>
                    <View style={{ fontSize: '16px', marginHorizontal: '110px', marginTop: '60px', minHeight: '160px' }}>
                        <Text style={{ fontSize: "11", textAlign: "center", marginBottom: '14px' }}>SUBMITTED BY</Text>
                        <View style={{ width: '300px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontFamily: 'Times New Roman Bold', marginBottom: '14px' }}>
                            <Text>Name of Student</Text>
                            <Text>Enrolment No.</Text>
                        </View>
                        {name}
                    </View>
                </table>

                <View style={{ marginTop: '60px' }}>
                    <Text style={{ fontSize: '12px', textAlign: 'center', marginBottom: '3px' }}>SUBMITTED TO</Text>
                    <View style={{ fontSize: '14px' }}>
                        <Text style={{ textAlign: 'center', marginBottom: '3px' }}>Prof. {profName}</Text>
                        <Text style={{ textAlign: 'center', marginBottom: '3px' }}>Academic Year</Text>
                        <Text style={{ textAlign: 'center', marginBottom: '3px' }}>{academicYear}</Text>
                    </View>
                </View>
            </Page>

            <Page style={styles.page}>
                <Text style={{ fontFamily: 'Times New Roman Bold', textAlign: 'center', marginTop: "60px", fontSize: '22px' }} >CERTIFICATE</Text>
                <Text style={{ fontSize: '14px', lineHeight: '1.5', textAlign: 'justify', marginTop: '50px' }}>
                    This is to certify that <Text style={{ fontFamily: 'Times New Roman Bold' }}>Design Engineering</Text> work embodied in this report entitled <Text style={{ fontFamily: 'Times New Roman Bold' }}>"{projectName}"</Text> has carried out by {data.map((item) => { return (<Text>{item.fullName} ({item.erNo}), </Text>) })} in {semester} semester, has submitted to <Text style={{ fontFamily: 'Times New Roman Bold' }}>Gujarat Technological University (GTU)</Text>. In Partial Fulfilment of the requirements for subject of <Text style={{ fontFamily: 'Times New Roman Bold' }}>{subject}</Text> in {branch} at Gujarat Engineering College, Bhavnagar. This work has been done under my supervision and is up to my satisfaction.
                </Text>
                <Text style={{ fontSize: '14px', marginTop: '50px' }}>Date: {date}</Text>
                <View style={{ fontSize: '12px', marginTop: '170px' }}>
                    <Text style={{ fontFamily: 'Times New Roman Bold' }}>Prof. {profName}</Text>
                    <Text> </Text>
                    <Text>Assistant Professor,</Text>
                    <Text>{branch} Department</Text>
                </View>
                <View style={{ fontSize: '12px', marginTop: '40px' }}>
                    <Text style={{ fontFamily: 'Times New Roman Bold' }}>Prof. {hodName}</Text>
                    <Text> </Text>
                    <Text>Head of Department,</Text>
                    <Text>{branch} Department</Text>
                    <Text>Government Program-{academicYear}</Text>
                </View>
            </Page>
            <Page style={styles.page}>
                <Text style={{ fontFamily: 'Times New Roman Bold', fontSize: '20px', marginTop: "60px", }}>Acknowledgement</Text>
                <View style={{ fontSize: '14px' }}>
                    <Text style={{ marginTop: '60px', textAlign: 'justify', lineHeight: '1.5' }}>               We as group have taken a lot of efforts to make this project work. It wouldn’t have been possible without help and support of many individuals so we would like to thank them all.</Text>
                    <Text style={{ marginTop: '30px', textAlign: 'justify', lineHeight: '1.5' }}>               We would like to express our profound gratitude to <Text style={{ fontFamily: 'Times New Roman Bold' }}>Prof. {hodName}</Text>, the HOD of <Text style={{ fontFamily: 'Times New Roman Bold' }}>{branch} department</Text>, and Mr. G B Vadodariya of university for their contributions to the completion of my project titled <Text style={{ fontFamily: 'Times New Roman Bold' }}>"{projectName}"</Text>.</Text>
                    <Text style={{ marginTop: '30px', textAlign: 'justify', lineHeight: '1.5' }}>              We would like to express my special thanks to our mentor Prof. <Text style={{ fontFamily: 'Times New Roman Bold' }}>{profName}</Text> for his time and efforts he provided throughout the year. Your useful advice and suggestions were really helpful to me during the project’s completion. In this aspect, I am eternally grateful to you.</Text>
                    <Text style={{ marginTop: '30px', textAlign: 'justify', lineHeight: '1.5' }}>              We would like to acknowledge that this project was completed by our team members: {data[0]['fullName']}, {data[1]['fullName']}, {data[2]['fullName']}, {data[3]['fullName']}.</Text>
                </View>
                <View style={{ textAlign: 'right', fontSize: '12px', marginTop: '30px' }}>
                    <Text style={{ lineHeight: '3' }}>Your sincerely, </Text>
                    <Text style={{ lineHeight: '3' }}>{data[0]['fullName']} ({data[0]['erNo']})</Text>
                    <Text style={{ lineHeight: '3' }}>{data[1]['fullName']} ({data[1]['erNo']})</Text>
                    <Text style={{ lineHeight: '3' }}>{data[2]['fullName']} ({data[2]['erNo']})</Text>
                    <Text style={{ lineHeight: '3' }}>{data[3]['fullName']} ({data[3]['erNo']})</Text>
                </View>
            </Page>
        </Document>
    )
};

// ReactPDF.render(<PDF />);
export default PDF;