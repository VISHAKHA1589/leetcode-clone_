import axios from 'axios';
import { LanguageVersions } from './constants';
 const API= axios.create({
  baseURL:"https://emkc.org/api/v2/piston"
 })

 export const executeCode= async(language, sourceCode)=>{
  const response= await API.post("/execute",{
    "language": language,
  "version": LanguageVersions[language],
  "files": [
    {
      
      "content": sourceCode
    }
  ]
  });
  return response.data.run.output;
 }