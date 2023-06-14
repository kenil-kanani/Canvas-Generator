import React, { useEffect, useState } from 'react';

function StickyNote(props) {
  const color = props.bgColor;
  const width = props.width;
  const height = props.height;
  const id = props.id;

  const style = {
    backgroundColor: color,
  };

  const [stickInfo, setStickyInfo] = useState('');

  useEffect(() => {
    const storedStickyNotes = localStorage.getItem('stickyNotes');
    if (storedStickyNotes) {
      const stickyNotesData = JSON.parse(storedStickyNotes);
      const stickyInfo = stickyNotesData[id];
      if (stickyInfo) {
        setStickyInfo(stickyInfo);
      }
    }
  }, [id]);

  useEffect(() => {
    const storedStickyNotes = localStorage.getItem('stickyNotes');
    const stickyNotesData = storedStickyNotes ? JSON.parse(storedStickyNotes) : {};
    stickyNotesData[id] = stickInfo;
    localStorage.setItem('stickyNotes', JSON.stringify(stickyNotesData));
  }, [id, stickInfo]);

  return (

    // <textarea
    //   type="text"
    //   onChange={(event) => { setStickyInfo(event.target.value) }}
    //   spellCheck="false"
    //   style={style}
    //   className={`${width} ${height}  bg-[${color}] border-none  rounded-lg p-[5px] px-[10px]`}
    // /

    <input
      type="text"
      value={stickInfo}
      onChange={(event) => {
        setStickyInfo(event.target.value);
      }}
      spellCheck="false"
      style={style}
      className={`${width} ${height} bg-${color} border-none rounded-lg px-2`}
    />
  );
}

export default StickyNote;
