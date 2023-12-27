import { Button, FormControl, HStack, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

function InvoiceFormData() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [taxOffice, setTaxOffice] = useState("");
  const [tcIdentityNumber, setTcIdentityNumber] = useState("");

  const [invoiceData, setInvoiceData] = React.useState({
    receiver: {
      firstName: "",
      lastName: "",
      address: "",
      taxOffice: "",
      tcIdentityNumber: "",
    },
    items: [
      {
        productName: "",
        price: 0,
      },
    ],
    logo: "",
    totalPrice: 0,
  });

  return (
    <VStack spacing={4} align={"stretch"} maxW={"md"} m="auto">
      <HStack>
        <Input
          placeholder="Ad:"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          placeholder="Soyad:"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </HStack>
      <Input
        placeholder="Adress:"
        value={address}
        as="textarea"
        onChange={(e) => setAddress(e.target.value)}
        height={100}
      />
      <Input
        placeholder="Vergi Dairesi:"
        value={taxOffice}
        onChange={(e) => setTaxOffice(e.target.value)}
      />
      <Input
        placeholder="Tc Kimlik No"
        value={tcIdentityNumber}
        onChange={(e) => setTcIdentityNumber(e.target.value)}
      />

      <Button colorScheme={"green"} variant={"outline"}>
        PDF OLUŞTUR
      </Button>
    </VStack>
  );
}

export default InvoiceFormData;
