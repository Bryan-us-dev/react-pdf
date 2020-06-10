import React from "react";
import { Page, Document, Image, Text, StyleSheet } from "@react-pdf/renderer";
import InvoiceTitle from "./InvoiceTitle";
import InvoiceNo from "./InvoiceNo";
import PageNumber from "./PageNumber";
import TOSContainer from "./TOS";
import { beforeSign, afterSign } from "../../data/terms";
import Crew from "./crew";
import Rentals from "./rentals";
import Misc from "./misc";
import InvoiceTotal from "./InvoiceTotal";
import InvoiceFor from "./InvoiceFor";
import InvoiceFooter from "./InvoiceFooter";
import SingPage from "./Sign";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 50,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column"
  },
  logo: {
    left: -50,
    width: 170,
    height: 50,
    marginRight: "auto"
  },
  test: {
    borderWidth: 1,
    height: 40,
    borderColor: 'black'
  }
});

const Invoice = ({ invoice }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src={"/black_logo.png"} />
      <InvoiceTitle title="Final Invoice/SOW" />
      <InvoiceNo invoice={invoice} />
      <InvoiceFor invoice={invoice} />
      <Crew tableData={invoice.crew} />
      <PageNumber text={"Continued on next page"} />
    </Page>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src={"/black_logo.png"} />
      <InvoiceTitle title="Final Invoice/SOW" />
      <InvoiceNo invoice={invoice} />
      <Rentals tableData={invoice.rentals} />
      <Misc tableData={invoice.misc} />
      <InvoiceTotal invoice={invoice} />
      <InvoiceFooter
        text={
          "Day rates will be paid in full; all overtime hours will be billed in 30 minute increments."
        }
        text1={
          "All invoices must be paid in full within 14 days from receipt of invoice."
        }
      />
    </Page>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src={"/black_logo.png"} />
      <TOSContainer beforeSign={beforeSign} afterSign={afterSign} />
    </Page>
    <Page size="A4" style={styles.page}>
      <Text>
        [Remainder of page left intentionally blank. Signature page to follow.]
      </Text>
    </Page>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src={"/black_logo.png"} />
      <SingPage invoice={invoice.sign} />
    </Page>
  </Document>
);

export default Invoice;
