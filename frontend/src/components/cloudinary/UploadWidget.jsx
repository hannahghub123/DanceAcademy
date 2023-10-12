import React, { useEffect, useRef } from 'react'

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary;
        console.log(cloudinaryRef.current ,"soooossss");
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dus4aunnu' ,
            uploadPreset: 'gbbnvuvp'
        }, function(error, result){

            console.log(result,"result!!!");

        });
    },[])
  return (
    <>
        <button onClick={()=> widgetRef.current.open()}>Cloudinary Upload button</button>
    </>
  )
}

export default UploadWidget