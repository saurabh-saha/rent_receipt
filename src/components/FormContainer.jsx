import { useState, useEffect } from "react";
import TenantInfo from "./TenantInfo";
import OwnerInfo from "./OwnerInfo";
import ImagesInfo from "./ImagesInfo";
import PeriodInfo from "./PeriodInfo";
import ReceiptInfo from "./ReceiptInfo";

const FormContainer = () => {
    const tabs = ["Tenant", "Owner", "Images", "Periods"];
    const [currentTab, setCurrentTab] = useState(0);
    const [showReceipt, setShowReceipt] = useState(false);
    const [periods, setPeriods] = useState([{ period: "", endDate: "" }]);
    const [formData, setFormData] = useState({
        tenantName: "",
        tenantAddress: "",
        rentPerMonth: "",
        totalPaidWord: "",
        ownerName: "",
        ownerAddress: "",
        ownerPhone: "",
        ownerPAN: "",
        place: "",
        stampImagePath: "",
        signatureImagePath: "",
    });

    const handlePeriodChange = (index, event) => {
        const updatedPeriods = [...periods];
        updatedPeriods[index][event.target.name] = event.target.value;
        setPeriods(updatedPeriods);
    };

    const addPeriod = () => {
        setPeriods([...periods, { period: "", endDate: "" }]);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleImageUpload = (e, fieldName) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
            ...prev,
            [fieldName]: URL.createObjectURL(file), // generate preview URL
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("receiptFormData", JSON.stringify(formData));
        localStorage.setItem("receiptPeriods", JSON.stringify(periods));
        setShowReceipt(true);
    };

    useEffect(() => {
        const savedFormData = localStorage.getItem("receiptFormData");
        const savedPeriods = localStorage.getItem("receiptPeriods");

        if (savedPeriods) {
            setPeriods(JSON.parse(savedPeriods));
        }

        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
            setShowReceipt(true);
        }
    }, []);

    const renderTabContent = () => {
        switch (currentTab) {
            case 0:
                return <TenantInfo formData={formData} handleFormChange={handleChange} />;
            case 1:
                return <OwnerInfo formData={formData} handleFormChange={handleChange} />;
            case 2:
                return (
                    <ImagesInfo
                    formData={formData}
                    handleImageUpload={handleImageUpload}
                    />
                );
            case 3:
                return (
                    <PeriodInfo
                    periods={periods}
                    handlePeriodChange={handlePeriodChange}
                    addPeriod={addPeriod}
                    />
                );
            default:
                return null;
        }
    };


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
            <div className="flex border-b mb-4">
                {tabs.map((tab, i) => (
                    <button
                    key={tab}
                    onClick={() => setCurrentTab(i)}
                    className={`px-4 py-2 ${
                        i === currentTab ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"
                    }`}
                    >
                    {tab}
                    </button>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                {renderTabContent()}
                <div className="mt-4 flex justify-between">
                    {currentTab > 0 && (
                        <button
                            type="button"
                            onClick={() => setCurrentTab(currentTab - 1)}
                            className="bg-gray-300 px-4 py-2 rounded"
                        >
                        Back
                        </button>
                    )}
                    {currentTab < tabs.length - 1 ? (
                        <button
                            type="button"
                            onClick={() => setCurrentTab(currentTab + 1)}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                        Next
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                        Generate
                        </button>
                    )}
                </div>
            </form>
        </div>
        <div className="bg-gray-50 p-6 rounded shadow overflow-auto">
            {showReceipt ? (
                <ReceiptInfo formData={formData} periods={periods} />
            ) : (
                <div className="text-gray-400 italic">
                Preview will appear here after clicking "Generate".
                </div>
            )}
        </div>
    </div>
  );
};

export default FormContainer;
