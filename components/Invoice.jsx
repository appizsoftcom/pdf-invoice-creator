import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Invoice({ data }) {
  const GetCurrentDate = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear().toString();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
    return formattedDate;
  };
  const GetCurrentDate2 = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear().toString();

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  return (
    <Box className="invoice">
      <div className="invoice_header">
        <Heading
          as="h2"
          textAlign={"center"}
          fontSize={"medium"}
          fontWeight={"thin"}
        >
          <GetCurrentDate />
        </Heading>
        <Heading
          as="h2"
          textAlign={"center"}
          fontSize={"medium"}
          fontWeight={"thin"}
        >
          Fatura
        </Heading>
        <Heading
          as="h2"
          textAlign={"center"}
          fontSize={"medium"}
          fontWeight={"thin"}
        />
      </div>
      <div className="separator"></div>

      <div className="invoice_content">
        <div className="customer_info">
          <Flex direction={"column"} justifyContent={"space-between"}>
            <Image
              src="https://appizsoftcom.vercel.app/logo.png"
              alt="Logo"
              width={200}
              height={75}
              style={{ margin: 25 }}
            />
            <div>
              <Heading as="h3" color={"#334bd4"} fontSize={"medium"}>
                Alıcı
              </Heading>
              <p>{data.receiver.firstName + " " + data.receiver.lastName}</p>
              <Box maxW={275}>{data.receiver.address}</Box>
              <p>{data.receiver.taxOffice}</p>
              <p>
                {data.receiver.tcIdentityNumber &&
                  `TCKN: ${data.receiver.tcIdentityNumber}`}
              </p>
              <p>
                {data.receiver.taxNumber &&
                  `Vergi No:${data.receiver.taxNumber}`}
              </p>
            </div>
          </Flex>

          <Box w={320}>
            <Heading as="h3" color={"#334bd4"} fontSize={"medium"}>
              MEDYABAYİM DIGITAL LTD
            </Heading>
            <Box fontSize={"md"}>
              SERBEST LİMAN VE BÖLGE / GAZİMAĞUSA / KUZEY KIBRIS TÜRK
              CUMHURİYETİ
            </Box>

            <p>
              E-Posta:
              <Link href="mailto:: ersincayan@gmail.com">
                ersincayan@gmail.com
              </Link>
            </p>

            <Box my={8}>
              <Heading as="h3" color={"#334bd4"} fontSize={"medium"}>
                Detaylar
              </Heading>
              <p>
                <b> Fatura Numarası : </b>
                {"" + data.invoiceNumber}
              </p>
              <p>
                <b>Fatura Tarihi :</b>
                {" " + GetCurrentDate2()}
              </p>
            </Box>
          </Box>
        </div>

        <div class="item">
          <span>
            <b>Ürün Adı</b>
          </span>
          <span>
            <b>Fiyat</b>
          </span>
        </div>
        {data?.items.length > 0 &&
          data?.items.map((item) => (
            <div className="item">
              <span>{item.productName}</span>
              <span>{item.productPrice + " " + item?.productCurrency}</span>
            </div>
          ))}
      </div>
      <div className="separator"></div>

      <div className="">
        <Text textAlign={"end"}>
          Toplam Tutar:{" "}
          {data.totalPrice + " " + data.receiver.productCurrency || 0}
        </Text>
      </div>
      <Divider />
      <BankAccountInfo />
    </Box>
  );
}

const styles = {
  fieldset: {
    border: "2px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    width: "fit-content",
    margin: "auto",
  },
  legend: {
    fontWeight: "bold",
    color: "#333",
    padding: "0 10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
    fontSize: "md",
  },
};

const BankAccountInfo = () => {
  return (
    <fieldset {...styles.fieldset}>
      <legend {...styles.legend}>BANKA HESAP BİLGİLERİ</legend>
      <table {...styles.table}>
        <thead>
          <tr>
            <th>BANKA ADI</th>
            <th>ŞUBE ADI</th>
            <th>HESAP ADI</th>
            <th>PARA BİRİMİ</th>
            <th>IBAN</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>İŞ BANKASI</td>
            <td>GIRNE SB.</td>
            <td>MEDYABAYİM DIGITAL LTD</td>
            <td>TRY</td>
            <td>TR30 0006 4000 0016 8100 5976 52</td>
          </tr>
          <tr>
            <td>İŞ BANKASI</td>
            <td>GIRNE SB.</td>
            <td>MEDYABAYİM DIGITAL LTD</td>
            <td>USD</td>
            <td>TR47 0006 4000 0026 8108 8439 90</td>
          </tr>
          <tr>
            <td>İŞ BANKASI</td>
            <td>GIRNE SB.</td>
            <td>MEDYABAYİM DIGITAL LTD</td>
            <td>EUR</td>
            <td>TR85 0006 4000 0026 8108 8439 85</td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  );
};

export default Invoice;
