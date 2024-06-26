import React from 'react'
import './Services.css'
import theme from '../../assets/theme.png'
import services_Data  from '../../assets/services_data'
import arrow from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
      <div className='services'> 
          <div className="services-title">
              <h1>My Services</h1>
              <img className='theme' src={theme} alt="" />
          </div>
          <div className="services-container">
              {services_Data.map((service, index) => {
                  return <div key={index} className='services-format'>
                      <h3>{service.s_no}</h3>
                      <h2>{service.s_name}</h2>
                      <hp>{service.s_desc}</hp>
                      <div className="services-readmore">
                          <p>Read More</p>
                          <img src={arrow} alt="" />
                      </div>
                  </div>
              })}
          </div>
    </div>
  )
}

export default Services