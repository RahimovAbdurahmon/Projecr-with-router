import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Close } from '@mui/icons-material';
import axios from 'axios';
// import { data } from 'autoprefixer';

const ProductById = () => {
    let { id } = useParams();
    const navigate = useNavigate()

    let API = "http://localhost:3000/data"
    let [todos, setTodos] = useState({})

    
    async function getItem() {
        try {
            let { data } = await axios.get(`${API}/${id}`)
            // console.log(data);
            setTodos(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getItem()
    }, [id])

  return (
    <>
    <div className='inline lg:pl-[80px] xl:pl-[120px] 2xl:pl-[200px]' onClick={() => navigate(-1)}> <ArrowBackIcon  sx={{fontSize:"30px"}} /> </div>
    <section className="main p-[20px] my-[100px] lg:px-[80px] flex xl:px-[120px] 2xl:px-[200px]">
        <img src={todos.img} className='w-[500px] h-[500px]' alt="" />
        <aside className='right p-[20px]'>
            <div className='flex items-center justify-between mb-[100px]'>
                <h1 className='text-[20px] font-[600]'>Info Product</h1>
                <div className='inline' onClick={() => navigate(-1)}> <Close /> </div>
            </div>
            <div className='flex items-center justify-between'>
                <ul className='flex flex-col gap-[20px] font-[700]'>
                    <li>Name</li>
                    <li>Price</li>
                </ul>
                <hr />
                <ul className='flex flex-col gap-[20px] font-[700]'>
                    <li>{todos.name}</li>
                    <li>{todos.price}</li>
                </ul>
            </div>
            <h1 className='text-[20px] font-[600] mt-[50px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime pariatur ea fugiat expedita dolor accusamus provident id dolorum explicabo minima.</h1>
        </aside>
    </section>
    </>
  )
}

export default ProductById