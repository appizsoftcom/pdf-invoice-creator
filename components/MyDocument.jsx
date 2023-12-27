import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
function MyDocument({ data }) {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
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
  });

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.header}>Fatura</Text>
            <Text style={styles.address}>
              Müşteri Adı:{" "}
              {`${data.receiver.firstName} ${data.receiver.lastName}`}
            </Text>
            <Text style={styles.address}>Adres: 123 Main St, Cityville</Text>

            <View style={styles.lineItem}>
              <Text>Ürün</Text>
              <Text>Miktar</Text>
              <Text>Fiyat</Text>
            </View>

            <View style={styles.lineItem}>
              <Text>Ürün 1</Text>
              <Text>2</Text>
              <Text>$50.00</Text>
            </View>

            <View style={styles.lineItem}>
              <Text>Ürün 2</Text>
              <Text>1</Text>
              <Text>$30.00</Text>
            </View>

            <View style={styles.total}>
              <Text>Toplam: $130.00</Text>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default MyDocument;
