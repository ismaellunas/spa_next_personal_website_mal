import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set worker URL
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PDFViewer({ file, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold">Portfolio Preview</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex justify-center"
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <div className="p-4 border-t flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <button
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
          
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Open Full Screen
          </a>
        </div>
      </div>
    </div>
  );
}