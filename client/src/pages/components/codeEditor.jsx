import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

import { useRef, useState } from "react";
import LanguageSelection from "./languageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState();
  const onMount = (editor) => {
    editorRef.current = editor;

    editor.focus();
  };

  const [language, setSelectedLanguage] = useState("javascript");

  const onSelect = (language) => {
    setSelectedLanguage(language);

    setValue(CODE_SNIPPETS[language]);
  };

  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <>
      <LanguageSelection language={language} onSelect={onSelect} />
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        language={language}
        defaultValue={CODE_SNIPPETS[language]}
        onMount={onMount}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <Output editorRef={editorRef} language={language} />
    </>
  );
};
export default CodeEditor;
