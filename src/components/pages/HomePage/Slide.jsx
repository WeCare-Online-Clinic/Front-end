import React, { useState } from 'react'
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
  img3,img3,img3
]


const Carousels = () => {
  const [activeIndex] = useState(1)

  return (
    <div className="container mt-3">
    <CRow>
      <CCol xs="12" xl="6">
        <CCard>
            <CCarousel>
              <CCarouselInner>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]} alt="slide 1"/>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[1]} alt="slide 2"/>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 3"/>
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
