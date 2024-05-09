import React from 'react'
import './MyWork.css'
import theme from '../../assets/theme.png'
import mywork_data from '../../assets/mywork_data'
import arrow from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
      <div className='mywork'>
        <div className="mywork-title">
              <h1>My Services</h1>
              <img className='theme' src={theme} alt="" />
          </div>
          <div className="mywork-container">
              {mywork_data.map((work, index) => {
              return <img key={index} src={work.w_img} />
              })}
          </div>
          <div className="mywork-showmore">
              <p>Show More</p>
              <img src={arrow} alt="" />
          </div>
    </div>
  )
}

export default MyWork