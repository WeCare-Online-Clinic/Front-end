import React from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core' // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout' // install this library
// Import the styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
// Worker

const ViewPDF = ({ reportDetails }) => {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  const viewPdf = 'data:application/pdf;base64,' + reportDetails.pdfReport
  return (
    <div className='pdf-container'>
      {/* show pdf conditionally (if we have one)  */}
      {viewPdf && (
        <>
          <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js'>
            <Viewer fileUrl={viewPdf} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </>
      )}

      {/* if we dont have pdf or viewPdf state is null */}
      {!viewPdf && <>No pdf file selected</>}
    </div>
  )
}

export default ViewPDF
