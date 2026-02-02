'use client'
import { useState } from 'react';

export default function Home() {
  const [slide, setSlide] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff'
  ];

  return (
    <div className="p-8">
      <h1>Test</h1>
      <p>This is a test page</p>
      
      <div className="mt-8 relative w-full h-96">
        //[]is used for array index
        <img src={images[slide]} alt="Slide" className="w-full h-full object-cover" />
        
        <button 
          onClick={() => setSlide((slide - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 bg-white p-2 rounded">
          ←
        </button>
        
        <button 
          onClick={() => setSlide((slide + 1) % images.length)}
          className="absolute right-4 top-1/2 bg-white p-2 rounded">
          →
        </button>
      </div>
    </div>
  );
}
