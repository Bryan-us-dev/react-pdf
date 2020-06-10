import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "black";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 24,
    flexGrow: 1,
    borderBottomColor: "black",
    borderBottomWidth: 2
  },
  column: {
    fontFamily: "Helvetica-Bold",
    width: "25%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 24,
    paddingTop: 4,
    paddingLeft: 8
  },
  withOutBorder: {
    fontFamily: "Helvetica-Bold",
    width: "25%",
    paddingTop: 4,
    paddingLeft: 8
  }
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.column}>Quantity</Text>
    <Text style={styles.column}>Name</Text>
    <Text style={styles.column}>Rate</Text>
    <Text style={styles.withOutBorder}>Total</Text>
  </View>
);

export default InvoiceTableHeader;
