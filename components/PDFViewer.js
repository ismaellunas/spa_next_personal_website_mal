import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';


if (typeof window !== 'undefined') {
    const pdfjsLib = require('pdfjs-dist/build/pdf');
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

export default function PDFViewer({ file, embedded = false, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(0.5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reset state when file changes
  useEffect(() => {
    setNumPages(null);
    setPageNumber(1);
    setLoading(true);
    setError(null);
  }, [file]);

  function onDocumentLoadSuccess({ numPages }) {
    console.log('PDF loaded successfully, pages:', numPages);
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error) {
    console.error('PDF load error:', error);
    setError(error.message || 'Failed to load PDF');
    setLoading(false);
  }

  // Debug file prop
  console.log('PDF file prop:', file);
  console.log('File type:', typeof file);

  const LoadingComponent = () => (
    <div className="flex items-center justify-center h-96">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-2"></div>
        <div className="text-gray-500">Loading PDF...</div>
      </div>
    </div>
  );

  const ErrorComponent = ({ message }) => (
    <div className="flex items-center justify-center h-96">
      <div className="text-center">
        <div className="text-red-500 mb-2">⚠️</div>
        <div className="text-red-500 font-medium">Failed to load PDF</div>
        <div className="text-gray-500 text-sm mt-1">{message}</div>
        <div className="text-gray-400 text-xs mt-2">
          Debug info: {typeof file === 'string' ? file : 'File object provided'}
        </div>
      </div>
    </div>
  );

  // Embedded version for portfolio section
  if (embedded) {
    return (
      <div className="h-full flex flex-col bg-gray-50">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b bg-white">
          <h3 className="text-lg font-bold text-gray-900">Portfolio Preview</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setScale(Math.max(0.5, scale - 0.1))}
              className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
              disabled={!numPages}
            >
              -
            </button>
            <span className="text-sm text-gray-600">{Math.round(scale * 100)}%</span>
            <button
              onClick={() => setScale(Math.min(2.0, scale + 0.1))}
              className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
              disabled={!numPages}
            >
              +
            </button>
          </div>
        </div>
        
        {/* PDF Content */}
        <div className="flex-1 overflow-auto p-4">
          <div className="flex justify-center">
            {error ? (
              <ErrorComponent message={error} />
            ) : (
              <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={<LoadingComponent />}
                options={{
                  cMapUrl: 'https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/',
                  cMapPacked: true,
                }}
              >
                {numPages && (
                  <Page 
                    pageNumber={pageNumber} 
                    scale={scale}
                    className="shadow-lg"
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                )}
              </Document>
            )}
          </div>
        </div>
        
        {/* Footer Controls */}
        <div className="p-4 border-t bg-white flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              disabled={pageNumber <= 1 || !numPages}
              onClick={() => setPageNumber(pageNumber - 1)}
              className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {pageNumber} of {numPages || '...'}
            </span>
            <button
              disabled={pageNumber >= numPages || !numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
              className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
          
          {file && (
            <a
              href={typeof file === 'string' ? file : URL.createObjectURL(file)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
            >
              Open Full Screen
            </a>
          )}
        </div>
      </div>
    );
  }

  // Modal version (original)
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold">Portfolio Preview</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div className="flex justify-center">
            {error ? (
              <ErrorComponent message={error} />
            ) : (
              <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={<LoadingComponent />}
                options={{
                  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
                  cMapPacked: true,
                }}
              >
                {numPages && (
                  <Page 
                    pageNumber={pageNumber} 
                    scale={scale}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                  />
                )}
              </Document>
            )}
          </div>
        </div>
        <div className="p-4 border-t flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              disabled={pageNumber <= 1 || !numPages}
              onClick={() => setPageNumber(pageNumber - 1)}
              className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {pageNumber} of {numPages || '...'}
            </span>
            <button
              disabled={pageNumber >= numPages || !numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
              className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
          
          {file && (
            <a
              href={typeof file === 'string' ? file : URL.createObjectURL(file)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Open Full Screen
            </a>
          )}
        </div>
      </div>
    </div>
  );
}