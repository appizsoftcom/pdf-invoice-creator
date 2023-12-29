import MyDocument from "@/components/MyDocument";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  HStack,
  IconButton,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { useAppContext } from "@/contexts/AppContext";

function InvoiceForm() {
  const [mount, setMount] = React.useState(false);

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    taxOffice,
    setTaxOffice,
    tcIdentityNumber,
    setTcIdentityNumber,
    logo,
    setLogo,
    productName,
    setProductName,
    productPrice,
    setProductPrice,
    productCurrency,
    setProductCurrency,
    invoiceNumber,
    setInvoiceNumber,
    items,
    setItems,
    taxNumber,
    setTaxNumber,
  } = useAppContext();

  React.useEffect(() => {
    setMount(true);
  }, []);

  const [invoiceType, setInvoiceType] = useState(0);

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
        productCurrency,
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
    setItems([]);
  };
  return (
    <>
      <VStack id="fatura-form" spacing={4} p={10}>
        <Select onChange={handleChange}>
          <option value={0}>Gerçek Kişi</option>
          <option value={1}>Tüzel Kişi</option>
        </Select>

        <Input
          placeholder="Fatura No:"
          value={invoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
          maxLength={15}
        />

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
        <Input
          placeholder="Adres:"
          value={address}
          as="textarea"
          onChange={(e) => setAddress(e.target.value)}
          height={50}
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

        <VStack>
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
            <option value={"TRY"}>₺</option>
            <option value={"USD"}>$</option>
            <option value={"EUR"}>£</option>
          </Select>
          <Button w="full" colorScheme={"green"} onClick={handleAddItem}>
            Ekle
          </Button>
        </VStack>

        {items.length > 0 && (
          <TableContainer>
            <Table variant={"simple"}>
              <Thead>
                <Tr>
                  <Td>Ürün Adı</Td>
                  <Td>Fiyat</Td>
                  <Td>Birim</Td>
                </Tr>
              </Thead>
              <Tbody>
                {items?.map((i, index) => {
                  return (
                    <Tr key={i.productName}>
                      <Td>{i.productName}</Td>
                      <Td>{i.productPrice}</Td>
                      <Td>{i.productCurrency}</Td>
                      <Td>
                        <IconButton
                          icon={<CloseIcon  />}
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
        <Box my={5}>
          <SavePDFButton />
        </Box>
      </VStack>
    </>
  );
}

const SavePDFButton = () => {
  return (
    <ButtonGroup spacing={5}>
      <Button
        colorScheme={"blue"}
        variant={"outline"}
        leftIcon={<IoEyeOutline />}
      >
        Ön İzleme
      </Button>
      <Button
        colorScheme={"green"}
        variant={"outline"}
        onClick={() => window.print()}
        leftIcon={<IoMdDownload />}
      >
        İndir
      </Button>
    </ButtonGroup>
  );
};

export default InvoiceForm;
