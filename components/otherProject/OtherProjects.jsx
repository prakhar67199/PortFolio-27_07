import React from 'react'
import img1 from "../../public/project-2.jpeg"

const otherData = [
  {
    title: "Project1",
    description: "data",
    gitLink: "git",
    liveLink: "live",
    imageUrl: img1,
  }
]

const OtherProjects = () => {
  return (
    <section>
      <div className='slide-container'>
        <div className='slide-content'>
          <div className='crad-wrapper'>
            <div className='card'>
              <div className='image-content'>
                <span className='overlay'> </span>

                <div className='card-image'>
                  <img src={otherData.imageUrl} className='card-img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherProjects;