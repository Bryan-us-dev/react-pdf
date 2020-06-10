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
    fontWeight: "bold",
    
  },
  column: {
    width: "15%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 24,
    paddingLeft: 8,
    paddingTop: 4
  },
  name: {
    width: "25%",
    textAlign: "left",
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

const InvoiceTableRow = ({ items }) => {
  const rows = items.map(item => (
    <View style={styles.row} key={item.position_name + item.date}>
      <Text style={styles.column}>{item.date}</Text>
      <Text style={styles.name}>{item.position_name}</Text>
      <Text style={styles.column}>{`$${item.base_rate.toFixed(2)}`}</Text>
      <Text style={styles.column}>{item.st_hours}</Text>
      <Text style={styles.column}>{item.ot_hours}</Text>
      <Text style={styles.withOutBorder}>{`$${item.total.toFixed(2)}`}</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
