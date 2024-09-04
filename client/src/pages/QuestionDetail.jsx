import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CodeEditor from "./components/codeEditor";
import LanguageSelection from "./components/languageSelector";
import { useContext } from "react";

import Output from "./components/Output";

const QuestionDetail = () => {
  const [question, setQuestion] = useState();
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  const [language, setLanguage] = useState("");
  const [editorRef, setEditorRef] = useState({});

  const handleParams = (event) => {
    setLanguage(event.language);
    setEditorRef(event.editorRef);
    console.log(event);
  };

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(`http://localhost:8080/questions/${id}`); // Adjust the URL to your API
        const data = await response.json();
        setQuestion(data); // Update the state with fetched questions
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false); // Ensure loading is set to false even if there's an error
      }
    };

    fetchQuestion(); // Call the function to fetch data
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render loading state if data is still being fetched
  }

  return (
    <div className="d-flex gap-2">
      <div className=" h-full w-50 border border-grey rounded" height="90vh">
        <div className="container">
          <h2 className="mt-1">{question.title}</h2>
          <h5 className="text-gray mt-4">{question.question} </h5>
          <h6 className="text-secondary">difficulty: {question.difficulty}</h6>
          <h6 className="text-secondary">
            acceptance: {question.acceptance}
          </h6>{" "}
          <Output editorRef={editorRef} language={language} />
        </div>
      </div>

      <div className=" h-50 w-50 border border-grey rounded">
        <CodeEditor onEmitLang={handleParams} />
      </div>
    </div>
  );
};

export default QuestionDetail;
