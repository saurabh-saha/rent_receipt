import React from "react";

const FileUpload = ({ label, name, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-1">{label}</label>
    <input
      type="file"
      name={name}
      accept="image/*"
      onChange={onChange}
      className="w-full"
    />
  </div>
);

export default FileUpload;
