import React from 'react'
import { PDFViewer, Document, Page, Text, Image, StyleSheet, View } from '@react-pdf/renderer';
import { useEffect, useState, useRef } from 'react';
import '../style/border.css'

let AEIOUReport = ({ environment, interaction, objects, activity, users, captureImage, setEnvironment, setInteraction, setObjects, setActivity, setUsers }) => {

  const handleRefresh = () => {
    captureImage('environment', setEnvironment);
    captureImage('interaction', setInteraction);
    captureImage('objects', setObjects);
    captureImage('activity', setActivity);
    captureImage('users', setUsers);
  };

  useEffect(() => {
    handleRefresh(); // Call the captureImage function when the component mounts
  }, []);

  let bulletText = (text) => (
    <View style={styles.bulletPoint}>
      <View style={styles.bullet} />
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  )

  const styles = StyleSheet.create({
    page: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 50,
      fontFamily: "Times New Roman",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "black",
      // position: "relative",
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
    bulletPoint: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '4px',
      marginTop: '4px'
    },
    bullet: {
      width: 4,
      height: 4,
      borderRadius: 2.5,
      backgroundColor: 'black',
      marginRight: 5,
    },
    bulletText: {
      fontSize: 12,
    },
  });

  const storedStickyNotes = localStorage.getItem('stickyNotes');
  let stickyNotesData = JSON.parse(storedStickyNotes);

  //- Taking Notes of all 
  const generateNotesArray = (category) => {
    const count = localStorage.getItem(category + '_Count');
    const notes = [];

    for (let index = 0; index < count; index++) {
      notes.push(bulletText(stickyNotesData[`${category}_${index}`]));
    }

    return notes;
  };

  //- render section
  const SectionWithImage = ({ title, image, notes, caption }) => (
    <View>
      <Text style={{ fontSize: '14px', fontFamily: 'Times New Roman Bold', marginTop: '30px' }}>{title}</Text>
      {image && <Image src={image} style={{ transform: 'scale(0.8)' }} />}
      {caption && <Text style={{ textAlign: 'center', fontSize: '12px', marginTop: '3px' }}>{caption}</Text>}
      {notes}
    </View>
  );

  const environmentNotes = generateNotesArray('AEIOU_0');
  const interactionNotes = generateNotesArray('AEIOU_1');
  const objectsNotes = generateNotesArray('AEIOU_2');
  const activityNotes = generateNotesArray('AEIOU_3');
  const usersNotes = generateNotesArray('AEIOU_4');


  return (
    <Document>
      <Page style={styles.page}>
        <View fixed style={{ width: '555px', height: '800px', border: '2px solid black' , position:'absolute' , top:'20px' , left:'20px'}}>
          {/* <Text>d</Text> */}
        </View>
        <View fixed style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: '10px', marginBottom: '20px' }}>
          <Text>Team ID - 12344</Text>
          <Text>AEIOU Canvas</Text>
        </View>
        <Text style={{ fontSize: '16px', fontFamily: 'Times New Roman Bold', lineHeight: '3' }}>AEIOU CANVAS</Text>
        {bulletText('A – Activity')}
        {bulletText('E – Environment')}
        {bulletText('I – Interaction')}
        {bulletText('O – Object')}
        {bulletText('U – Users')}
        <Text style={{ fontSize: '12px', lineHeight: '1.5', marginTop: '20px', textAlign: 'justify' }}>Stand for 5 elements to be coded. Activity, environment, interaction, object and user Activates are goal-directed sets of actions path towards things people want to accomplish interaction are between a person and someone or something else they are the building blocks of activities.</Text>

        {/* //- ACTIVITIES: - */}
        <SectionWithImage
          title="ACTIVITIES: -"
          image={activity}
          notes={activityNotes}
          caption="Fig. 2.1 Activities"
        />

        <SectionWithImage
          title="ENVIRONMENT: -"
          image={environment}
          notes={environmentNotes}
          caption="Fig. 2.2 Environment"
        />

        <SectionWithImage
          title="INTERACTION: -"
          image={interaction}
          notes={interactionNotes}
          caption="Fig. 2.3 Interaction"
        />

        <SectionWithImage
          title="OBJECTS: -"
          image={objects}
          notes={objectsNotes}
          caption="Fig. 2.3 Objects"
        />

        <SectionWithImage
          title="USERS: -"
          image={users}
          notes={usersNotes}
          caption="Fig. 2.4 Users"
        />

        <View fixed style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: '10px', marginTop: '20px', position: 'absolute', bottom: '35px', left: '85px', right: '85px' }}>
          <Text>Gujarat Technological University </Text>
          <Text>GEC Bhavnagar</Text>
        </View>
      </Page>
    </Document>
  )
}

export default AEIOUReport;
