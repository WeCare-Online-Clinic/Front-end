import React, { useState } from 'react'
import img1 from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.jpg'
import img3 from '../../assets/img/new2.jpg'
import {
  CCard,
  CCarousel,
  CCarouselControl,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow 
} from '@coreui/react'

const slides=[
  img2,img1,img3
]


const Carousels = () => {

  return (
    <div className="container mt-3" >
    <CRow>
      <CCol xs="12" xl="12">
        <CCard>
            <CCarousel>
              <CCarouselInner>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]}  alt="slide 1" height="500px"/>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[1]} alt="slide 2" height="500px"/>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 3" height="500px"/>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
        </CCard>
      </CCol>
    </CRow>
    </div>
  )
}

export default Carousels
