import { useRef } from "react";
import jsPDF from "jspdf";
import ReportTemplate from "./ReportTemplate";
import { Button, Center } from "@chakra-ui/react";

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
   <Center mt={5}>
   <Button
        colorScheme={"blue"}
        variant={"outline"}
        onClick={handleGeneratePdf}
      >
        Generate PDF with jspdf
      </Button>
   </Center>
      <div ref={reportTemplateRef}>
        <ReportTemplate />
      </div>
    </div>
  );
}

export default TestGenerate;
