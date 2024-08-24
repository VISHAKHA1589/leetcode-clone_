import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Questions = () => {
  const [questions, setQuestions] = useState([]); // State to store questions
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8080/questions"); // Adjust the URL to your API
        const data = await response.json();
        setQuestions(data); // Update the state with fetched questions
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false); // Ensure loading is set to false even if there's an error
      }
    };

    fetchQuestions(); // Call the function to fetch data
  }, []); // Empty dependency array to fetch data once on component mount

  if (loading) {
    return <div>Loading...</div>; // Render loading state if data is still being fetched
  }

  const getlevel = (value) => {
    switch (value) {
      case "high":
        return "text-warning"; // Class for high level
      case "medium":
        return "text-danger"; // Class for medium level
      case "low":
        return "text-info"; // Class for low level
      case "daily":
        return "text-success"; // Class for daily frequency
      case "weekly":
        return "text-primary"; // Class for weekly frequency
      case "monthly":
        return "text-secondary"; // Class for monthly frequency
      case "yearly":
        return "text-dark"; // Class for yearly frequency
      default:
        return ""; // Default class if no match
    }
  };

  return (
    <>
      <table className="table mt-5">
        <thead>
          <tr className="text-secondary">
            <td scope="col" className="text-secondary">
              Status
            </td>
            <td className="text-secondary">title</td>
            <td scope="col" className="text-secondary">
              Solution
            </td>
            <td scope="col" className="text-secondary">
              Acceptance
            </td>
            <td scope="col" className="text-secondary">
              Difficulty
            </td>
            <td scope="col" className="text-secondary">
              Frequency
            </td>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id} className="cursor-pointer">
              <th scope="row" className="text-secondary">
                {question.id}
              </th>
              <td className="text-secondary">
                <Link
                  to={`/questions/${question.id}`}
                  className="text-decoration-none text-secondary"
                >
                  {question.title}
                </Link>
              </td>
              <td className="text-secondary">{question.answer}</td>
              <td className="text-secondary">{question.acceptance}</td>
              <td className={`text-secondary ${getlevel(question.difficulty)}`}>
                {question.difficulty}
              </td>
              <td className={`text-secondary ${getlevel(question.frequency)}`}>
                {question.frequency}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Questions;
