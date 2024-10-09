import Image from 'next/image'
import React from 'react'

const ProductCard = ({product}: {product: any} ) => {
  return ( 
    <div className='w-[240px] shadow-lg p*2'>
         <div className='relative h-[200px]'>
            {/* <Image src={product.image} fill alt="" className='object-contain '/> */}

<Image 
  src={product.image}
  width={500}
  height={500}
  priority={true}
  alt="Example image"
/>
         </div>
    </div>
  )
}

export default ProductCard