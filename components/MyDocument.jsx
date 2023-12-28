import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import { sizes } from "@/src/foundations/sizes";

function MyDocument({ data }) {
  Font.register({
    family: "Roboto",
    src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
  });

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#E4E4E4",
      fontFamily: "Roboto",
    },
    section: {
      flexDirection: "row",
    },
    header: {
      fontSize: 20,
      marginBottom: 10,
    },
    address: {
      marginBottom: 10,
    },
    lineItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    },
    total: {
      marginTop: 10,
      borderTopWidth: 1,
      paddingTop: 5,
    },
    headerDate: {
      top: 2,
      fontSize: 12,
      fontWeight: "bold",
    },
    headerTitle: {
      position: "absolute",
      top: 2,
      left: "50%",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
    image: {
      width: "150px",
      height: "50px",
    },
    divider: {
      height: 1,
      backgroundColor: "black",
      marginHorizontal: 5,
      zIndex: 10,
    },
    headerSection: {
      position: "relative",
      flexDirection: "row",
      zIndex: 10,
    },
    logoSection: {
      flexDirection: "row",
      marginTop: 20,
      justifyContent: "space-evenly",
    },
    invoiceTitle: {
      fontSize: 12,
      color: "blue",
    },
    blueTitle: {
      color: "blue",
    },
    fontSize14: {
      fontSize: 14,
    },
  });

  const getCurrentDate = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear().toString();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
    return formattedDate;
  };

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.headerSection}>
            <Text style={styles.headerDate}>{getCurrentDate()}</Text>
            <Text style={styles.headerTitle}>Fatura</Text>
          </View>

          <View style={styles.divider}></View>
          <View>
            <Text style={styles.invoiceTitle}>Fatura</Text>
          </View>
          <View style={styles.logoSection}>
            <Image
              style={styles.image}
              src="https://appizsoftcom.vercel.app/logo.png"
            />
            <View
              style={{
                flexDirection: "column",
                fontSize: 14,
              }}
            >
              <Text style={{ fontSize: 14, color: "blue" }}>
                MEDYABAYİM DIGITAL LTD
              </Text>
              <Text style={sizes.fontSize14}>
                SERBEST LİMAN VE BÖLGE / GAZİMAĞUSA / KUZEY KIBRIS TÜRK
                CUMHURİYETİ
              </Text>
              <Text style={sizes.fontSize14}>
                E-Posta: ersincayan@gmail.com
              </Text>
            </View>
          </View>
          <View style={styles.logoSection}></View>
        </Page>
      </Document>
    </>
  );
}

export default MyDocument;
