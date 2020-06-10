import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  flexRow: {
    flexDirection: "row"
  },
  subParagraph: {
    marginTop: 16
  },
  bottomLine: {
    width: 100,
    height: 20,
    borderBottom: 1,
    borderBottomColor: "black"
  },
  lastBottomLine: {
    width: 100,
    height: 20,
    borderBottom: 1,
    borderBottomColor: "black",
    marginBottom: 24
  }
});

const TOSContainer = ({ beforeSign, afterSign }) => (
  <View>
    {beforeSign.map((term, index) => (
      <View key={index} style={styles.subParagraph}>
        <Text>{term[0]}</Text>
        <Text>{term[1]}</Text>
      </View>
    ))}
    <Text>Notices to Company:</Text>
    <View style={styles.bottomLine} />
    <View style={styles.bottomLine} />
    <View style={styles.bottomLine} />
    <View style={styles.lastBottomLine} />

    <View style={styles.flexRow}>
      <Text>Phone:</Text>
      <Text style={styles.bottomLine} />
    </View>
    <View style={styles.flexRow}>
      <Text>Email:</Text>
      <Text style={styles.bottomLine} />
    </View>

    <Text style={styles.subParagraph}>Notices to Gofor:</Text>
    <Text style={styles.subParagraph}>Gofor, LLC</Text>
    <Text>30 W 141 St #14N</Text>
    <Text>New York, NY 10037</Text>
    <Text>Phone: (646) 770-2859</Text>
    <Text>Email: daniel@gofor.productions; cc: go@gofor.productions</Text>
    <Text style={styles.subParagraph}>With a copy to:</Text>
    <Text style={styles.subParagraph}>Daniel Howick-Smith</Text>
    <Text>41 Curry Rd</Text>
    <Text>Hastings on Hudson, NY 10706</Text>
    <Text style={styles.subParagraph}>
      Either party may change its address for notice by notice to the other party
      given in accordance with this Section. Notices will be considered to have been
      given at the time of actual delivery in person, three business days after
      deposit in the mail as set forth above, one (1) day after delivery to an
      overnight air courier service, or on the date of receipt of email notification.
    </Text>
    {afterSign.map((term, index) => (
      <View key={index} style={styles.subParagraph}>
        <Text>{term[0]}</Text>
        <Text>{term[1]}</Text>
      </View>
    ))}
  </View>
);

export default TOSContainer;
