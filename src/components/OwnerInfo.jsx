// OwnerInfo.jsx
import TextInput from "./TextInput";

const OwnerInfo = ({ formData, handleFormChange }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">Owner Info</h3>

      <TextInput
        label="Owner’s Name"
        name="ownerName"
        value={formData.ownerName}
        onChange={handleFormChange}
      />

      <TextInput
        label="Owner’s Address"
        name="ownerAddress"
        value={formData.ownerAddress}
        onChange={handleFormChange}
      />

      <TextInput
        label="Owner’s Phone"
        name="ownerPhone"
        value={formData.ownerPhone}
        onChange={handleFormChange}
      />

      <TextInput
        label="Owner’s PAN"
        name="ownerPAN"
        value={formData.ownerPAN}
        onChange={handleFormChange}
      />

      <TextInput
        label="Place"
        name="place"
        value={formData.place}
        onChange={handleFormChange}
      />
    </div>
  );
};

export default OwnerInfo;
