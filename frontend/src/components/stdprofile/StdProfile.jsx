import React from 'react'
import StdCard from './StdCard'
import Back from '../common/back/Back'
import ImageDisplay from '../cloudinary/CloudinaryDisplay'

const StdProfile = () => {
  return (
    <>
        <Back title='Your Profile'/>
        <div style={{ marginTop:5 ,display: 'flex', alignItems: 'center', justifyContent:'center' }}>
        
        <section className='team padding'>
            <div className="container grid">
                <StdCard/>
                <ImageDisplay/>
            </div>
        </section>
        {/* <UploadWidget/> */}
        </div>
    </>
  )
}

export default StdProfile