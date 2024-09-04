// app/loading.tsx
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
      <div
        className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full"
        role="status"
      ></div>
    </div>
  );
};

export default Loading;
