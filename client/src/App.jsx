import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";

import Navbar from "./pages/Navbar";
import Questions from "./pages/Questions";
import QuestionDetail from "./pages/QuestionDetail";
import CodeEditor from "./pages/components/codeEditor";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />

        <Route path="/question-detail" element={<QuestionDetail />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
