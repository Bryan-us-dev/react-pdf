import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 24
  },
  flexRow: {
    flexDirection: "row",
    marginBottom: 10
  },
  bottomLine: {
    width: 100,
    height: 20,
    borderBottom: 1,
    borderBottomColor: "black"
  },
  marginTop: {
    marginTop: 80
  },
  label: {
    marginBottom: 10
  },
  signature: {
    width: 200,
    height: 20,
    borderBottom: 1,
    borderBottomColor: "black",
    top: -5
  },
  printed: {
    width: 210,
    height: 20,
    borderBottom: 1,
    borderBottomColor: "black",
    top: -5
  },
  date: {
    width: 220,
    height: 20,
    borderBottom: 1,
    borderBottomColor: "black",
    top: -5
  }
});

const SignPage = ({ invoice }) => (
  <Fragment>
    <Text style={styles.marginBottom}>
      IN WITNESS WHEREOF, the parties have caused this Agreement to be executed by
      their duly authorized representatives as of the Effective Date.
    </Text>

    <Text>Gofor LLC</Text>
    <Text style={styles.marginBottom}>By:</Text>
    <View style={styles.flexRow}>
      <Text>Signature:</Text>
      <Text style={styles.signature} />
    </View>
    <View style={styles.flexRow}>
      <Text>Printed:</Text>
      <Text style={styles.printed} />
    </View>
    <View style={styles.flexRow}>
      <Text>Date:</Text>
      <Text style={styles.date} />
    </View>

    <Text style={styles.marginTop}>Overland Entertainment</Text>
    <Text style={styles.marginBottom}>By:</Text>
    <View style={styles.flexRow}>
      <Text>Signature:</Text>
      <Text style={styles.signature} />
    </View>
    <View style={styles.flexRow}>
      <Text>Pritned:</Text>
      <Text style={styles.printed} />
    </View>
    <View style={styles.flexRow}>
      <Text>Date:</Text>
      <Text style={styles.date} />
    </View>

    <Text style={styles.marginTop}>{`Bank Name: ${invoice.bank_name}`}</Text>
    <Text
      style={styles.marginBottom}
    >{`Account Name: ${invoice.account_name}`}</Text>
    <Text
      style={styles.marginBottom}
    >{`Account Number: ${invoice.account_number}`}</Text>
    <Text>Routing Number:</Text>
    <Text>{`${invoice.routing_number.paper} (paper & electronic)`}</Text>
    <Text>{`${invoice.routing_number.wires} (wires)`}</Text>
  </Fragment>
);

export default SignPage;
