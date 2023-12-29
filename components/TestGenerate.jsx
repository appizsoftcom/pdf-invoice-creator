import { useRef } from "react";
import jsPDF from "jspdf";
import ReportTemplate from "./ReportTemplate";
import { Button } from "@chakra-ui/react";

function TestGenerate() {
  const reportTemplateRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
    doc.setFont("Inter-Regular", "normal");
  };

  return (
    <div>
      <Button
        colorScheme={"green"}
        variant={"outline"}
        onClick={handleGeneratePdf}
      >
        Generate PDF with jspdf
      </Button>
      <div ref={reportTemplateRef}>
        <ReportTemplate />
      </div>
    </div>
  );
}

export default TestGenerate;
