import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function UserLayout({ children, translations }) {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const [darkMode, setDarkMode] = React.useState(false);
  const isDarkMode = colorMode === "dark";

  React.useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  // "/"" yolu için Header'ı gizle
  const isHomePage = router.pathname === "/";
  const headerVisible = !isHomePage;

  return (
    <Box>
      {headerVisible && <Sidebar>{children}</Sidebar>}
      {!headerVisible && <>{children}</>}

      <Footer />
    </Box>
  );
}

export default UserLayout;
