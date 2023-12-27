import { AppContextProvider } from "@/contexts/AppContext";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { appWithTranslation } from "next-i18next";
const UserLayout = dynamic(() => import("../layouts/UserLayout"));

function MyApp({ Component, pageProps }) {
  let Layout = UserLayout;

  return (
    <ChakraProvider>
      <CSSReset />
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
