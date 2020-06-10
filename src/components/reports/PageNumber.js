import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontWeight: "bold"
  },
  textBold: {
    fontWeight: "bold"
  }
});

const PageNumber = ({ text }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.textBold}>{text}</Text>
  </View>
);

export default PageNumber;
