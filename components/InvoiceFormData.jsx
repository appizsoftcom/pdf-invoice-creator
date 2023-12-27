import { CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  FormControl,
  HStack,
  IconButton,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import {
  PDFViewer,
  Document,
  Page,
  Text as PDFText,
  pdf,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import MyDocument from "./MyDocument";

function InvoiceFormData() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [taxOffice, setTaxOffice] = useState("");
  const [tcIdentityNumber, setTcIdentityNumber] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [logo, setLogo] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    setInvoiceData({
      receiver: {
        firstName,
        lastName,
        address,
        taxOffice,
        tcIdentityNumber,
      },
      items,
      logo,
    });
  }, [
    firstName,
    lastName,
    address,
    taxOffice,
    tcIdentityNumber,
    logo,
    productName,
    productPrice,
    items,
  ]);

  const [invoiceData, setInvoiceData] = React.useState({
    receiver: {
      firstName,
      lastName,
      address,
      taxOffice,
      tcIdentityNumber,
    },
    items,
    logo,
  });

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    if (productName && productPrice) {
      const newItem = {
        productName,
        productPrice: parseFloat(productPrice),
      };

      setItems([...items, newItem]);
      setProductName("");
      setProductPrice("");
    }
  };

  const SavePDFButton = () => {
    const handleSavePDF = async () => {
      const blob = await pdf(<MyDocument data={invoiceData} />).toBlob();
      saveAs(blob, "invoice.pdf");
    };

    return (
      <>
        <Button
          colorScheme={"green"}
          variant={"outline"}
          onClick={handleSavePDF}
        >
          PDF OLUŞTUR
        </Button>
      </>
    );
  };

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
        maxLength={11}
      />

      <Divider />
      <Flex gap={5}>
        <HStack>
          <Input
            type="text"
            placeholder="Ürün Adı"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Ürün Fiyatı"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </HStack>
        <Button colorScheme={"green"} onClick={handleAddItem}>
          Ekle
        </Button>
      </Flex>

      {items.length > 0 && (
        <>
          <TableContainer>
            <Table variant={"simple"}>
              <Thead>
                <Tr>
                  <Td>Ürün Adı</Td>
                  <Td>Fiyat</Td>
                </Tr>
              </Thead>
              <Tbody>
                {items?.map((i, index) => {
                  return (
                    <Tr key={i.productName}>
                      <Td>{i.productName}</Td>
                      <Td>{i.productPrice}</Td>
                      <Td>
                        <IconButton
                          icon={<CloseIcon />}
                          onClick={() => removeItem(index)}
                          colorScheme="red"
                        />
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      )}

      <SavePDFButton />
    </VStack>
  );
}

export default InvoiceFormData;
