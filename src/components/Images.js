import Back from '../assets/icons/back.png';
import JJ from '../assets/about01.png';

import React from 'react'

const Images = () => {
        const images = [
  { id: 0, src: `${Back}` },
  { id: 1, src: `${JJ}`  },
  { id: 2, src: `${Back}`  },
]
  return (
    <div>
         {images.map(image => (
        <img key={image.id} src={image.src} alt="mage" />
      ))}
    </div>
  )
}

export default Images