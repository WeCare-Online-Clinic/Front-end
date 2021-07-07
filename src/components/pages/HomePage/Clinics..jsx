import React from 'react'
import './Home.css'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow
  } from '@coreui/react'
function Clinics() {
    return (
        <div className='clinics' style={{opacity:'0.9'}}>
          <CRow>
          <CCol xs="3" xl="3">    
            < CCard className="mt-3 h-100 text-white  " color="primary" >
            <CCardHeader>
                 Clinic Services             
                </CCardHeader>
                <CCardBody >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="3" xl="3">  
                < CCard className="mt-3 h-100 text-white" color="primary">
                <CCardHeader>
                        Clinic Services             
                    </CCardHeader>
                    <CCardBody >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </CCardBody>
                </CCard>
          </CCol>
          <CCol xs="3" xl="3">  
                < CCard className="mt-3 h-100 text-white" color="primary">
                <CCardHeader>
                        Clinic Services             
                    </CCardHeader>
                    <CCardBody >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </CCardBody>
                </CCard>
          </CCol>
          <CCol xs="3" xl="3">  
                < CCard className="mt-3 h-100 text-white" color="primary">
                <CCardHeader>
                        Clinic Services             
                    </CCardHeader>
                    <CCardBody >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </CCardBody>
                </CCard>
          </CCol>
          </CRow>
        </div>
    )
}

export default Clinics
