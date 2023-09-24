import { Document, Page  } from "react-pdf";

//seting up fake worker for pdf
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 


function Resume() {
    

  return (
    <Document file="/assets/Lebenslauf_von_Dresca.pdf">
        <Page pageNumber='1'/>
    </Document>
  )
}

export default Resume;
