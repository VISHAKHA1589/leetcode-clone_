import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelection from "./languageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import { useEffect } from "react";

const CodeEditor = (props) => {
  const editorRef = useRef();
  const [value, setValue] = useState(CODE_SNIPPETS["javascript"]);
  const [language, setSelectedLanguage] = useState("javascript");

  const emitLang = () => {
    props.onEmitLang({
      editorRef: editorRef,
      language: language,
    });
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    emitLang();
  };

  const onSelect = (lang) => {
    setSelectedLanguage(lang);
    setValue(CODE_SNIPPETS[lang]);
    // console.log(language);
  };

  useEffect(() => {
    console.log(language);
    emitLang();
  });

  return (
    <>
      <LanguageSelection language={language} onSelect={onSelect} />
      <Editor
        height="75vh"
        defaultLanguage="javascript"
        language={language}
        defaultValue={CODE_SNIPPETS[language]}
        onMount={onMount}
        value={value}
        onChange={(value) => {
          setValue(value);

          emitLang(value, null);
        }}
      />
      <Output editorRef={editorRef} language={language} />
    </>
  );
};

export default CodeEditor;
