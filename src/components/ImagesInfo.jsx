// ImagesInfo.jsx
const ImagesInfo = ({ formData, handleImageUpload }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">Upload Images</h3>

      {/* Stamp Image */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Stamp Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e, "stampImagePath")}
        />
        {formData.stampImagePath && (
          <img
            src={formData.stampImagePath}
            alt="Stamp preview"
            className="mt-2"
            style={{ width: "100px" }}
          />
        )}
      </div>

      {/* Signature Image */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Signature Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e, "signatureImagePath")}
        />
        {formData.signatureImagePath && (
          <img
            src={formData.signatureImagePath}
            alt="Signature preview"
            className="mt-2"
            style={{ width: "100px" }}
          />
        )}
      </div>
    </div>
  );
};

export default ImagesInfo;
