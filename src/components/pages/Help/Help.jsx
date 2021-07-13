import React, { useEffect } from "react";
import back from "./../../assets/img/help.jpg";
import NavBar from "../../Navbar/Header/Navbar";
import { RabbitLegacy } from "crypto-js";
import picture from "../../assets/img/3.jpg";

import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
function Help() {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${back}')  `;
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <div className="container" style={{marginTop:"100px"}}>
        <div className="row">
          <div className="col-6">
            {/* image */}
            <img src={picture } class="img-fluid"  style={{height:'16cm'}}></img>
          </div>
          <div className="col-6">
            <div className="clinics" style={{ opacity: "0.9" }}>
              <CRow>
                <CCol>
                  <CCard className="mt-3 h-100 text-white  " color="primary" style={{fontSize:'15px',fontFamily:'inherit'}}>
                    <CCardHeader><center>About Us</center></CCardHeader>
                    <CCardBody>
                      <p style={{textIndent:'60px'}}>
                          This is a web-based platform for managing clinics in
                      hospitals. The hospital administrator's office manages the
                      system. Patients, doctors and nurses can access this
                      system. Administrators register patients for this
                      procedure when the patient shows their OPD letter to the
                      counter. The letter stated that he should attend clinics.
                      After registration, the administrator gives patients their
                      login access. The patient can then view his number, dates
                      and doctor's information through the system. Patients also
                      have the opportunity to request new dates. Doctors and
                      nurses can view his dates, times and places. Doctors can
                      manage patient information / treatment through the system.
                      We ensure that information about the patient's history is
                      secure. After these major functions, there are several
                      additional functions of this system. From the system data
                      with the help of the Machine Learning concepts, we can
                      manage doctors, patient’s statistics and it is also useful
                      for predicting an increase in patients.                              
                      This is a web-based platform for managing clinics in
                      hospitals.</p>   <p style={{textIndent:'60px'}}>The hospital administrator's office manages the
                      system. Patients, doctors and nurses can access this
                      system. Administrators register patients for this
                      procedure when the patient shows their OPD letter to the
                      counter. The letter stated that he should attend clinics.
                      After registration, the administrator gives patients their
                      login access. The patient can then view his number, dates
                      and doctor's information through the system. Patients also
                      have the opportunity to request new dates. Doctors and
                      nurses can view his dates, times and places. Doctors can
                      manage patient information / treatment through the system.
                      We ensure that information about the patient's history is
                      secure. After these major functions, there are several
                      additional functions of this system. From the system data
                      with the help of the Machine Learning concepts, we can
                      manage doctors, patient’s statistics and it is also useful
                      for predicting an increase in patients.</p>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Help;
