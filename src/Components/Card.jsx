import { Button } from '@mui/material'
import React from 'react'

const Card = ({img, name, price}) => {
  return (
    <div className='shadow-lg p-[20px] rounded-[5px] lg:w-[320px]'>
        <img src={img} alt="" />
        <p className='text-gray-500'>200 грамм 130 Ккал</p>
        <h1 className='text-[25px] font-[600]'>{name}</h1>
        <p>Лосось, сыр "Филадельфия", огурец, авокадо </p>
        <div className='flex items-center justify-between mt-[30px]'>
            <h1 className='text-[25px] font-[600]'>{price}</h1>
            <Button variant='contained' color='warning'>Заказать</Button>
        </div>
    </div>
  )
}

export default Card