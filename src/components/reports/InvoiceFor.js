import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    color: "white",
    backgroundColor: "black",
    height: 24,
    paddingTop: 5,
    paddingLeft: 5
  },
  row: {
    flexDirection: "row",
    border: "1px solid black",
    alignItems: "center",
    height: 24
  },
  col1: {
    width: "30%",
    textAlign: "left",
    borderRightColor: "black",
    borderRightWidth: 1,
    height: 24,
    paddingLeft: 8,
    paddingTop: 4
  },
  col2: {
    width: "45%",
    borderRightColor: "black",
    borderRightWidth: 1,
    height: 24,
    paddingLeft: 8,
    paddingTop: 4
  },
  col3: {
    width: "25%",
    paddingLeft: 8
  }
});

const InvoiceNo = ({ invoice }) => (
  <Fragment>
    <View style={styles.header}>
      <Text>Invoice For</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.col1}>{invoice.trans_company}</Text>
      <Text style={styles.col2}>{invoice.trans_address}</Text>
      <Text style={styles.col3}>{invoice.trans_name}</Text>
    </View>
  </Fragment>
);

export default InvoiceNo;
