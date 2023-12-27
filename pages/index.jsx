import InvoiceFormData from "@/components/InvoiceFormData";
import MyDocument from "@/components/MyDocument";
import { Container, Stack } from "@chakra-ui/react";
import { PDFViewer } from "@react-pdf/renderer";
import React from "react";


export default function Home() {
  // Create styles
  const [mount, setMount] = React.useState(false);

  React.useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
      {mount && (
        <>
          <Stack my={10}  spacing={10}>
            <InvoiceFormData />
          </Stack>

          <PDFViewer>
            <MyDocument />
          </PDFViewer>
        </>
      )}
    </>
  );
}
{
  /*
export const getServerSideProps = async ({ res, req }) => {
  res.setHeader("Content-Type", "application/pdf");
  return {
    props: {},
  };
};


 */
}
