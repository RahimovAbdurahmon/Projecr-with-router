import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nothing = () => {
  return (
    <>
    <div className='mt-[10px] mb-[100px] flex flex-col gap-[10px] items-center'>
        <h1 className='text-[40px] font-[800] lg:text-[50px] xl:text-[80px] 2xl:text-[200px]'>404</h1>
        <p className='lg:w-[60%] text-center lg:text-[20px] font-[600]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quasi accusamus laborum assumenda obcaecati rerum pariatur quisquam! Quis incidunt tempora quibusdam recusandae doloremque aperiam libero, sed, rem, culpa maiores omnis?</p>
        <Link to={"/"}><Button variant='contained' color='warning'>На главную</Button></Link>
    </div>
    </>
  )
}

export default Nothing