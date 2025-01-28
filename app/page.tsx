"use client";

import axios from "axios";
import { useState } from "react";
import Loader from "../components/loader";

export default function Home() {
  const [link, setLink] = useState('')
  const [question, setQuestion] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false);

  const fileHandler = () => {
    alert('This feature is currently not available.')
  }

  const handleSubmit = () => {
    if(link && question){
    setLoading(true)
    console.log(link, question)
    axios.post('http://127.0.0.1:5000/qn-ans', {
      link: link,
      question: question
    })
    .then(function (response) {
    setLoading(false)
    setResult(response.data[0].answer);

    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <form >
        <div className="w-full h-screen flex justify-center items-center">
          <div className="min-h-[250px] rounded-lg border border-gray-500 p-3 shadow-md min-w-fit">
            <div className="flex w-lg justify-between flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload File (Disabled)
              </label>
              <div className="flex items-center justify-center w-[350px] mb-2">
                <label onClick={fileHandler} className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PDF or DOCX</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" disabled />
                </label>
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Link of document
                </label>
                <input type="text" value={link} onChange={(e) => setLink(e.target.value)} className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://" required />
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question
              </label>
              <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What is the ....?" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Answer
              </label>
              <input type="text" value={result} className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Result..." disabled />
            </div>
            <div className="mt-2 flex justify-end">
            <button type="button" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

            </div>
          </div>

        </div>
      </form>
    </div>
  );
}
