import Invoice from "@/components/Invoice";
import { useAppContext } from "@/contexts/AppContext";
import Head from "next/head";
import React from "react";

function Dashboard() {
  const { invoiceData } = useAppContext();
  return (
    <>
      <Head>
        <title>Hızlı Fatura | Dashboard</title>
        <meta
          name="description"
          content="Serbest çalışanlar ve işletmeler için Ücretsiz ve Basit faturalandırma."
        />
      </Head>

      <Invoice data={invoiceData} />
    </>
  );
}

export default Dashboard;
