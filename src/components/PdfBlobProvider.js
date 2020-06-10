import React, { Component } from "react";
import { BlobProvider } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import Invoice from "./reports/Invoice";

// Create Document Component
export default class PdfBlobProvider extends Component {
  render() {
    const { invoice, pdfId } = this.props;
    if (pdfId === null) {
      return null;
    }

    return (
      <BlobProvider key={pdfId} document={<Invoice invoice={invoice} />}>
        {({ blob, loading }) => {
          if (loading) {
            return null;
          }
          saveAs(blob, "somename.pdf");
          return null;
        }}
      </BlobProvider>
    );
  }
}
