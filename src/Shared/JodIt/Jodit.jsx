import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const Jodit = ({ content, setContent }) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      onChange={(newContent) => setContent(newContent)}
    />
  );
};

export default Jodit;
