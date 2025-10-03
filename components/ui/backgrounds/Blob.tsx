'use client';
import Spline from '@splinetool/react-spline';

export default function Blob() {
  return ( 
    <div className="w-full h-full relative ">
      <div className="w-full h-full absolute z-10 ">
      <Spline
        scene="https://prod.spline.design/mYw1gekvYi13Chhn/scene.splinecode" 
      />
      </div>
      <div className='w-full h-full absolute top-0 flex left-0 z-20 bg-transparent'>
        <div className='w-1/3 h-20 bg-black mt-auto ml-auto '></div>
      </div>
    </div>
  );
}
