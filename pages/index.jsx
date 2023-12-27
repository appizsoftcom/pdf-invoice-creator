import InvoiceFormData from "@/components/InvoiceFormData";
import MyDocument from "@/components/MyDocument";
import { Container, Stack } from "@chakra-ui/react";
import { PDFViewer } from "@react-pdf/renderer";
import Head from "next/head";
import React from "react";

export default function Home() {
  // Create styles
  const [mount, setMount] = React.useState(false);

  React.useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
    <Head>
      <title>
        Invoice Creator
      </title>
    </Head>
      {mount && (
        <>
          <Stack my={10} spacing={10}>
            <InvoiceFormData />
          </Stack>
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
