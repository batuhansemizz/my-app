"use client"

import Image from 'next/image'
import React from 'react'
import {Rating} from '@mui/material'
import textClip from '@/utils/TextClip'
import { useRouter } from 'next/navigation'

const ProductCard = ({product}: {product: any} ) => {

  const router = useRouter()
   
  let productRating = product.reviews?.reduce((acc:number , item:any)=> acc + item.rating, 0 )/ product?.reviews?.length
  return ( 
    <div onClick={()=> router.push(`product/${product.id}`)} className='w-[240px] shadow-lg p-2 rounded-md cursor-pointer flex flex-col flex-1 px-3 md:px-10'>
         <div className='relative h-[200px]'>
             <Image src={product.image} fill alt="" className='object-contain '/>


         </div>
         <div className='text-center mt-3 space-y-1'>
          <div>{textClip(product.name)}</div>
          <Rating name="read-only" value={productRating} readOnly />
          <div className='text-black-600 font-bold text-lg md:xl'>{product.price} TL</div>
         </div>
    </div>
  )
}

export default ProductCard