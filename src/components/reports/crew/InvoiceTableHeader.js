import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "black";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontWeight: "bold",
    flexGrow: 1,
    borderBottomColor: "black",
    borderBottomWidth: 2
  },
  column: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    fontWeight: 900,
    height: 24,
    paddingLeft: 8,
    paddingTop: 4
  },
  name: {
    width: "25%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 24,
    paddingLeft: 8,
    paddingTop: 4
  },
  withOutBorder: {
    width: "15%",
    fontWeight: 800,
    paddingLeft: 8
  }
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.column}>Date</Text>
    <Text style={styles.name}>Position Name</Text>
    <Text style={styles.column}>Base Rate</Text>
    <Text style={styles.column}>ST Hours</Text>
    <Text style={styles.column}>OT Hours</Text>
    <Text style={styles.withOutBorder}>Total</Text>
  </View>
);

export default InvoiceTableHeader;
