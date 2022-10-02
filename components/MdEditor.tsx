import React, { useRef, useState, useCallback } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

const MdEditor = () => {
  const [md, setMd] = useState<string | undefined>("# Hello World");

  const handleChange = useCallback((md: any) => {
    setMd(md);
    console.log(md);
  }, []);

  return (
    <>
      <MDEditor value={md} onChange={handleChange} />
    </>
  );
};

export default MdEditor;
