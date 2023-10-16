import React from 'react';
const cloudinary = require('cloudinary-core');

// Initialize Cloudinary with your credentials
const cl = new cloudinary.Cloudinary({ cloud_name: 'dus4aunnu' });

const ImageDisplay = () => {

    const publicId = 'ewhaku3pvg4k4guaulgi';
  // Generate the image URL using Cloudinary and public ID
  const imageUrl = cl.url(publicId, { width: 300, height: 200, crop: 'fill' });

  return (
    <div className="image-container">
      <img src={imageUrl} alt={publicId} width={300} height={200} />
    </div>
  );
};

export default ImageDisplay;


