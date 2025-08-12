import TextInput from "./TextInput";

const TenantInfo = ({ formData, handleFormChange }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">Tenant Info</h3>

      <TextInput
        label="Tenant’s Name"
        name="tenantName"
        value={formData.tenantName}
        onChange={handleFormChange}
      />

      <TextInput
        label="Tenant’s Address"
        name="tenantAddress"
        value={formData.tenantAddress}
        onChange={handleFormChange}
      />

      <TextInput
        label="Rent per month"
        name="rentPerMonth"
        value={formData.rentPerMonth}
        onChange={handleFormChange}
        type="number"
      />

      <TextInput
        label="Total Paid (in words)"
        name="totalPaidWord"
        value={formData.totalPaidWord}
        onChange={handleFormChange}
      />
    </div>
  );
};

export default TenantInfo;
