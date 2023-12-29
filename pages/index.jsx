import HeroSection from "@/components/Hero";

import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hızlı Fatura</title>
        <meta
          name="description"
          content="Serbest çalışanlar ve işletmeler için Ücretsiz ve Basit faturalandırma."
        />
      </Head>

      <HeroSection />
    </>
  );
}
