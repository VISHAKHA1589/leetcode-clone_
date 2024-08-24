import { useState } from "react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const [value, setValue] = useState();
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      const result = await executeCode(language, sourceCode);
      console.log(result);
      setValue(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={runCode}>Run code</button>
      <div>{value}</div>
    </div>
  );
};
export default Output;
