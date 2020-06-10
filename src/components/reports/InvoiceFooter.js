import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center"
  },
  subTitle: {
    fontSize: 9
  },
  textBold: {
    fontWeight: 800
  }
});

const InvoiceFooter = ({ text, text1 }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.subTitle}>{text}</Text>
    <Text style={styles.textBold}>{text1}</Text>
  </View>
);

export default InvoiceFooter;
