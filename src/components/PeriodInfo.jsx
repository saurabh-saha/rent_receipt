// PeriodInfo.jsx
const PeriodInfo = ({ periods, handlePeriodChange, addPeriod }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">Periods</h3>

      {periods.map((p, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            type="date"
            name="startDate"
            value={p.startDate || ""}
            onChange={(e) => handlePeriodChange(i, e)}
            className="border rounded p-1 flex-1"
          />
          <input
            type="date"
            name="endDate"
            value={p.endDate || ""}
            onChange={(e) => handlePeriodChange(i, e)}
            className="border rounded p-1 flex-1"
          />
        </div>
      ))}
    </div>
  );
};

export default PeriodInfo;
