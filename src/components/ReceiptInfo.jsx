// ReceiptInfo.jsx
import React from "react";
import './ReceiptInfo.css';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ReceiptInfo = ({ formData, periods }) => {
  
    const downloadPDF = () => {
        const receiptElement = document.getElementById("receipt-container");

        html2canvas(receiptElement, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");

            // Keep aspect ratio
            const imgWidth = 190; // A4 width minus margins
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
            pdf.save(`Rent_Receipt_${formData.tenantName}.pdf`);
        });
    };

  return (
    <div>
      <button onClick={downloadPDF} className="download-btn">
        Download as PDF
      </button>

      <div id="receipt-container">
        {periods.map((d, i) => (
          <div key={i} className="receipt">
            <h2>RENT RECEIPT</h2>

            <div className="row">
              <span className="label">Tenant’s Name:</span>
              <span className="value">{formData.tenantName}</span>
            </div>

            <div className="row">
              <span className="label">Address of the rented premises:</span>
              <span className="value">{formData.tenantAddress}</span>
            </div>

            <div className="row">
              <span className="label">Rent per month:</span>
              <span className="value">{formData.rentPerMonth}</span>
            </div>

            <div className="row">
              <span className="label">Total Rent Paid:</span>
              <span className="value">{formData.totalPaidWord}</span>
            </div>

            <div className="row">
              <span className="label">Period Covering:</span> From{" "}
              <span className="value">{d.period}</span>
            </div>

            <div className="row">
              <span className="label">Name Owner:</span>
              <span className="value">{formData.ownerName}</span>
            </div>

            <div className="row">
              <span className="label">Address Owner:</span>
              <span className="value">{formData.ownerAddress}</span>
            </div>

            <div className="row">
              <span className="label">Phone #Owner:</span>
              <span className="value">{formData.ownerPhone}</span>
            </div>

            <div className="row">
              <span className="label">Owner PAN:</span>
              <span className="value">{formData.ownerPAN}</span>
            </div>

            {formData.stampImagePath && (
              <div className="stamp-signature">
                <img
                  src={formData.stampImagePath}
                  alt="Stamp"
                  className="stamp-img"
                />
                {formData.signatureImagePath && (
                  <img
                    src={formData.signatureImagePath}
                    alt="Signature"
                    className="signature-img"
                  />
                )}
              </div>
            )}

            <div className="date-place">
              <div className="row">
                <span className="label">Date:</span>
                <span className="value">{d.endDate}</span>
              </div>
              <div className="row">
                <span className="label">Place:</span>
                <span className="value">{formData.place}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceiptInfo;
