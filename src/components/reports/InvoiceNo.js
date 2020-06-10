import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row"
  },
  flexRowTextBold: {
    flexDirection: "row",
    fontWeight: "bold"
  },
  subContainer1: {
    width: "30%",
    top: -25
  },
  subContainer2: {
    width: "70%",
    top: -35
  },
  label: {
    width: "50%",
    textAlign: "right"
  },
  boldLabel: {
    fontFamily: "Helvetica-Bold",
    width: "50%",
    textAlign: "right"
  },
  text: {
    width: "50%",
    textAlign: "left",
    paddingLeft: 8
  }
});

const InvoiceNo = ({ invoice }) => (
  <View style={styles.flexRow}>
    <View style={styles.subContainer1}>
      <Text>{invoice.address1}</Text>
      <Text>{invoice.address2}</Text>
      <Text>{`T: ${invoice.phone}`}</Text>
      <Text>{`E: ${invoice.email}`}</Text>
      <Text>{invoice.site}</Text>
    </View>

    <View style={styles.subContainer2}>
      <View style={styles.flexRowTextBold}>
        <Text style={styles.label}>Project Number:</Text>
        <Text style={styles.text}>{invoice.project_number}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.label}>Project Name:</Text>
        <Text style={styles.text}>{invoice.project_name}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.label}>Invoice Name:</Text>
        <Text style={styles.text}>{invoice.invoice_name}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.label}>Invoice Number:</Text>
        <Text style={styles.text}>{invoice.invoice_number}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.label}>Timestamp:</Text>
        <Text style={styles.text}>{invoice.timestamp}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.label}>PO Number:</Text>
        <Text style={styles.text}>{invoice.po_number}</Text>
      </View>
    </View>
  </View>
);

export default InvoiceNo;
