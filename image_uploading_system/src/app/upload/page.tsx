"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

// Define a strict type for our component status
type UploadStatus = {
  type: "success" | "error" | "loading" | "";
  message: string;
};

const UploadPage: React.FC = () => {
  // Explicitly typing our hooks
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>({ type: "", message: "" });

  // Handle file selection with proper HTMLInputElement typing
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStatus({ type: "", message: "" });
    }
  };

  // Handle form submission with standard HTMLFormElement typing
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      setStatus({ type: "error", message: "Please select a file first!" });
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    setStatus({ type: "loading", message: "Uploading your file..." });

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus({ type: "success", message: "File uploaded successfully!" });
        setFile(null); // Clears the preview on success
      } else {
        setStatus({
          type: "error",
          message: "Upload failed. Server returned an error.",
        });
      }
    } catch (error) {
      console.error("Upload Error:", error);
      setStatus({
        type: "error",
        message: "Network error. Is your backend server running?",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Upload Your Image
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            PNG, JPG, or GIF up to 10MB
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Custom File Input/Preview Container */}
          <div className="relative flex min-h-[200px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-4 text-center transition-colors hover:border-indigo-500 hover:bg-indigo-50/50 group">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0 z-10"
            />

            {/* Conditional Rendering: Show Preview if file exists, else show placeholder icon */}
            {file ? (
              <div className="relative w-full h-full flex flex-col items-center justify-center space-y-2">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Upload preview"
                  className="max-h-40 max-w-full rounded-lg object-contain shadow-sm border border-gray-200"
                />
                <p className="text-xs text-gray-500 font-medium truncate max-w-[250px]">
                  {file.name}
                </p>
                <span className="text-xs text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to change image
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full bg-indigo-100 p-3 text-indigo-600 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  <span className="text-indigo-600 underline">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
              </div>
            )}
          </div>

          {/* Status Notifications */}
          {status.message && (
            <div
              className={`rounded-lg p-3 text-sm font-medium text-center ${
                status.type === "success"
                  ? "bg-green-50 text-green-700"
                  : status.type === "error"
                    ? "bg-red-50 text-red-700"
                    : "bg-blue-50 text-blue-700"
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.type === "loading"}
            className={`w-full rounded-xl bg-indigo-600 py-3 px-4 text-center text-sm font-semibold text-white shadow-md outline-none transition-all hover:bg-indigo-700 hover:shadow-lg focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              status.type === "loading" ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {status.type === "loading" ? "Uploading..." : "Upload Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;
