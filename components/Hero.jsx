import * as React from "react";
import {
  Container,
  Heading,
  Stack,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

const companiesImages = [
  "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1611162617263-4ec3060a058e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
];

const HeroSection = () => {
  return (
    <Container
      maxW="7xl"
      p={4}
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        textAlign="center"
        direction="column"
        spacing={6}
        alignItems="center"
      >
        <Heading
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          maxW="600px"
        >
          Hızlı Fatura
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Serbest çalışanlar ve işletmeler için Ücretsiz ve Basit
          faturalandırma.
        </Text>
        <HStack spacing={5}>
          <Link href="/dashboard">
            <Button colorScheme="teal" variant="solid" rounded="md" size="lg">
              Fatura Oluştur
            </Button>
          </Link>
        </HStack>
      </Stack>
    </Container>
  );
};

export default HeroSection;
