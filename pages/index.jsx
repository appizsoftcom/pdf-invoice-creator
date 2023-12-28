import Invoice from "@/components/Invoice";
import InvoiceFormData from "@/components/InvoiceFormData";
import MyDocument from "@/components/MyDocument";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Input,
  Select,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { PDFViewer } from "@react-pdf/renderer";
import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function Home() {
  // Create styles
  const [mount, setMount] = React.useState(false);

  React.useEffect(() => {
    setMount(true);
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [taxOffice, setTaxOffice] = useState("");
  const [taxNumber, setTaxNumber] = useState("");

  const [tcIdentityNumber, setTcIdentityNumber] = useState("");
  const [logo, setLogo] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCurrency, setProductCurrency] = useState("");

  const [invoiceType, setInvoiceType] = useState(0);

  const [items, setItems] = useState([]);

  useEffect(() => {
    setInvoiceData({
      receiver: {
        firstName,
        lastName,
        address,
        taxOffice,
        taxNumber,
        tcIdentityNumber,
        productCurrency
      },
      items,
      logo,
      totalPrice,
    });
  }, [
    firstName,
    lastName,
    address,
    taxOffice,
    tcIdentityNumber,
    taxNumber,
    logo,
    productName,
    productPrice,
    productCurrency,
    items,
  ]);

  const totalPrice = items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.productPrice;
  }, 0);

  const [invoiceData, setInvoiceData] = React.useState({
    receiver: {
      firstName,
      lastName,
      address,
      taxOffice,
      tcIdentityNumber,
      productCurrency
    },
    items,
    totalPrice,
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

  const handleChange = (event) => {
    setInvoiceType(event.target.value);
    setTaxNumber("");
    setTcIdentityNumber("");
    setLastName("");
  };

  const handle2Change = (event) => {
    setProductCurrency(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Invoice Creator</title>
      </Head>
      {mount && (
        <>
          <Flex alignItems={"start"}>
            <Box p={20}>
              <VStack
                id="fatura-form"
                spacing={4}
                align={"stretch"}
                maxW={"md"}
                m="auto"
              >
                <Select onChange={handleChange}>
                  <option value={0}>Gerçek</option>
                  <option value={1}>Tüzel</option>
                </Select>

                <Input placeholder="Fatura No:" />

                <HStack>
                  <Input
                    placeholder={invoiceType == 0 ? "Ad:" : "Firma Adı:"}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {invoiceType == 0 && (
                    <>
                      <Input
                        placeholder="Soyad:"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </>
                  )}
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

                {invoiceType == 0 ? (
                  <>
                    <Input
                      placeholder="Tc Kimlik No"
                      value={tcIdentityNumber}
                      onChange={(e) => setTcIdentityNumber(e.target.value)}
                      maxLength={11}
                    />
                  </>
                ) : (
                  <>
                    <Input
                      placeholder="Vergi No"
                      value={taxNumber}
                      onChange={(e) => setTaxNumber(e.target.value)}
                      maxLength={10}
                    />
                  </>
                )}

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
                    <Select onChange={handle2Change}>
                      <option value={'TRY'}>₺</option>
                      <option value={'USD'}>$</option>
                    </Select>
                  </HStack>
                  <Button colorScheme={"green"} onClick={handleAddItem}>
                    Ekle
                  </Button>
                </Flex>

                {items.length > 0 && (
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
                                  icon={<CloseIcon w={5} h={5} />}
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
                )}
                <SavePDFButton />
              </VStack>
            </Box>

            <Invoice data={invoiceData} />
          </Flex>
        </>
      )}
    </>
  );
}

const SavePDFButton = () => {
  const handleSavePDF = async () => {
    const blob = await pdf(<MyDocument data={invoiceData} />).toBlob();
    saveAs(blob, "invoice.pdf");
    //location.reload();
  };

  return (
    <>
      <Button
        colorScheme={"green"}
        variant={"outline"}
        // onClick={handleSavePDF}
        onClick={() => window.print()}
      >
        PDF OLUŞTUR
      </Button>
    </>
  );
};
