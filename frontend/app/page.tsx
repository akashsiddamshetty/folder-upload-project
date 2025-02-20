"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const UploadFolder = () => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const input = document.querySelector("input[data-directory]");
    if (input) (input as HTMLInputElement).webkitdirectory = true;
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement & { webkitdirectory: boolean };
    if (input.files) {
      const fileList = Array.from(input.files);
      setFiles(fileList);
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) return alert("Please select a folder");

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file, file.webkitRelativePath);
    });

    try {
      await axios.post("http://localhost:8000/upload-folder", formData);
      alert("Folder uploaded successfully!");
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <h1 className="text-2xl font-bold">Upload Folder</h1>
      <input
        type="file"
        data-directory
        multiple
        onChange={handleFileChange}
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleUpload}
      >
        Upload Folder
      </button>
    </div>
  );
};

export default UploadFolder;
