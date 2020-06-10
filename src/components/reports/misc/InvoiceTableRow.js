import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "black";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontWeight: "bold"
  },
  column: {
    width: "25%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 24,
    paddingLeft: 8,
    paddingTop: 4
  },
  withOutBorder: {
    width: "25%",
    fontWeight: 800,
    paddingLeft: 8
  }
});

const InvoiceTableRow = ({ items }) => {
  const rows = items.map(item => (
    <View style={styles.row} key={item.name}>
      <Text style={styles.column}>{item.quantity}</Text>
      <Text style={styles.column}>{item.name}</Text>
      <Text style={styles.column}>{`$${item.rate.toFixed(2)}`}</Text>
      <Text style={styles.withOutBorder}>{`$${item.total.toFixed(2)}`}</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
