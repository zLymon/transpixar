'use client';

import { useState } from 'react';

export default function Demo() {
  const [isProcessing, setIsProcessing] = useState(false);
  // const [videoUrl, setVideoUrl] = useState('');

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    // TODO: Implement integration with TransPixar API
    // API call to process video will go here
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">TransPixar AI Online Demo</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Upload Video File
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={handleUpload}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg"
              disabled={isProcessing}
            />
          </div>

          {isProcessing && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p>TransPixar AI is processing your video...</p>
            </div>
          )}

          {/* {videoUrl && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Processing Result</h3>
              <video
                src={videoUrl}
                controls
                className="w-full rounded-lg"
              />
              <a
                href={videoUrl}
                download
                className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg"
              >
                Download Processed Video
              </a>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
} 