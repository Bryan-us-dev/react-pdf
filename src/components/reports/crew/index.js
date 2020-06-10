import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import InvoiceTableHeader from "./InvoiceTableHeader";
import InvoiceTableRow from "./InvoiceTableRow";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "black"
  },
  section: {
    flexDirection: "row",
    fontWeight: "bold",
    marginTop: 24
  },
  sectionName: {
    textAlign: "left",
    width: "50%"
  },
  sectionTotal: {
    textAlign: "right",
    width: "50%"
  }
});

const InvoiceItemsTable = ({ tableData }) => {
  const total = tableData.reduce((total, a) => (total += a.total), 0);
  return (
    <View>
      <View style={styles.section}>
        <Text style={styles.sectionName}>Crew</Text>
        <Text style={styles.sectionTotal}>{`Section Total: $${total.toFixed(
          2
        )}`}</Text>
      </View>
      <View style={styles.tableContainer}>
        <InvoiceTableHeader />
        <InvoiceTableRow items={tableData} />
      </View>
    </View>
  );
};

export default InvoiceItemsTable;
