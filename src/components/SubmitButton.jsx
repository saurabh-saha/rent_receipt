const SubmitButton = ({ label }) => (
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
  >
    {label}
  </button>
);

export default SubmitButton;
