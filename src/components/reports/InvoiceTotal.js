import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    marginTop: 150,
    flexDirection: "column",
    justifyContent: "flex-end",
    fontSize: 12,
    fontWeight: "bold"
  },
  description: {
    width: "85%",
    textAlign: "right",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8
  },
  total: {
    textAlign: "right",
    fontSize: 14
  },
  totalBold: {
    textAlign: "right",
    fontSize: 14,
    fontWeight: "bold"
  },
  totalRed: {
    textAlign: "right",
    fontSize: 14,
    color: "red",
    fontWeight: "bold"
  }
});

const InvoiceTableFooter = ({ invoice }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.totalBold}>{`Subtotal: $${invoice.subtotal.toFixed(
        2
      )}`}</Text>
      <Text style={styles.total}>{`Taxes: $${invoice.tax.toFixed(2)}`}</Text>
      <Text style={styles.total}>{`Payroll/Admin: $${invoice.payroll.toFixed(
        2
      )}`}</Text>
      <Text style={styles.total}>{`Discount: $${invoice.discount.toFixed(2)}`}</Text>
      <Text
        style={styles.totalBold}
      >{`Invoice Total: $${invoice.invoice_total.toFixed(2)}`}</Text>
      <Text
        style={styles.totalBold}
      >{`Balanced Paid: $${invoice.balance_paid.toFixed(2)}`}</Text>
      <Text style={styles.totalRed}>{`Total Due: $${invoice.total_due.toFixed(
        2
      )}`}</Text>
    </View>
  );
};

export default InvoiceTableFooter;
