import React from 'react'
import Navbar from "~/components/Navbar";
import {useState} from "react";
import FileUploader from "~/components/FileUploader";
const Upload = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [statusText, setStatusText] = useState("");
    const handleFileSelect = (file: File | null) => {
        setFile(file)
    }
    const handleSubmit =(e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const form =e.currentTarget.closest("form");
   if (!form) return;
    const formData = new FormData(form);
    const company_Name = formData.get("company-name");
        const job_title = formData.get("job-title");
        const job_description = formData.get("job-description");
        console.log(company_Name);
        console.log(job_title);
        console.log(job_description);
    }

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar />
        <section className="main-section">
            <div className="page-heading py-16">
                <h1> Smart Feedback for your dream job</h1>
                {isProcessing ? (
                    <>
                        <h2>{statusText}</h2>
                    <img src="/images/resume-scan.gif" className="w-full"/>
                    </>
                ):(
                    <h2> Drop your resume for an ATS score and improvement tips</h2>
                )}
                {!isProcessing &&(
                    <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-15">
                        <div className="form-div">
                            <label htmlFor="company-name">Company Name</label>
                            <input type="text" name="company-name"  placeholder="Enter Company Name" id="company-name" required/>
                        </div>

                        <div className="form-div">
                            <label htmlFor="job-title">Job-title</label>
                            <input type="text" name="job-title"  placeholder="Enter Job Title" id="job-title" required/>
                        </div>
                        <div className="form-div">
                            <label htmlFor="job-desc">Job Description</label>
                            <textarea rows={5} name="job-desc"  placeholder="Enter Job Description" id="job-desc" required/>
                        </div>
                        <div className="form-div">
                        <label htmlFor="uploader">Upload Resume </label>
                            <FileUploader onFileSelect={handleFileSelect} />
                        </div>
                        <button className="primary-button" type="sumbit">
                            Analyse Resume
                        </button>
                    </form>
                )}
            </div>
        </section>
        </main>
    )
}
export default Upload
