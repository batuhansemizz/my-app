"use client"
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='h-[237px] relative'>
                    <div className='h-[137px]  position-relative'>
                        <Image src={"/header_banner_webtr.jpeg"} className='object-cover'   alt=""  fill />
                        
                    </div>
    </div>
  )
}



export default Banner