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
                 Queue Management             
                </CCardHeader>
                <CCardBody >
                According to the queue number given to a patient, estimated time is given to arrive at the hospital. 
                Considering clinic starting time and average time taken to examine one patient.When the patient in the front of the queue is admitted to the ward, 
                the patient's profile and other relevant data will be displayed in the doctor’s system.
                </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="3" xl="3">  
                < CCard className="mt-3 h-100 text-white" color="primary">
                <CCardHeader>
                        Manage Staff          
                    </CCardHeader>
                    <CCardBody >
                       Register doctors,nurses,lab technician and manage their shedules. 
                       Admin can add and update schedules and view the user statistics of the system.
                    </CCardBody>
                </CCard>
          </CCol>
          <CCol xs="3" xl="3">  
                < CCard className="mt-3 h-100 text-white" color="primary">
                <CCardHeader>
                        Consulting with Statistics            
                    </CCardHeader>
                    <CCardBody >
                    Doctors can view statistics about patients and predictions of variation in total patients and patients with severe conditions.
                    When in clinics with relevant patients, doctors can add prescriptions, notes and lab tests and also can view the medical history of patients.
                    </CCardBody>
                </CCard>
          </CCol>
          <CCol xs="3" xl="3">  
                < CCard className="mt-3 h-100 text-white" color="primary">
                <CCardHeader>
                      Patients' Statistics             
                    </CCardHeader>
                    <CCardBody >
                      Lab technician and Head nurse can upload patient's lab reports to the system. Then
                      System generates statistics according to the lab reports.Patient can have a idea about his
                      condition by refering the statistics. Aslo It makes easy to doctor to consult the patients.

                    </CCardBody>
                </CCard>
          </CCol>
          </CRow>
        </div>
    )
}

export default Clinics
