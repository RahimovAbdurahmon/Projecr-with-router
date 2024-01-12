import { Delete } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const About = () => {
  return (
    <>
    <section className="section1">
      <h1 className='text-[30px] font-[500] lg:text-[40px] xl:text-[50px] p-[20px] lg:pl-[80px] xl:pl-[120px] 2xl:pl-[200px]'>Оформление заказа</h1>
      <div className='flex items-start flex-wrap justify-around lg:px-[100px]'>
        <aside className='left flex flex-col gap-[20px]'>
          <div className='flex items-center justify-between gap-[20px] p-[20px]'>
            <img src="src/assets/img (3).png" className='w-[70px]' alt="" />
            <p className='text-[20px] font-[700]'>Пицца “Рикша”</p>
            <img src="src/assets/counter.png" alt="" />
            <Delete sx={{color:"red"}} />
          </div>
          <hr />
          <div className='flex items-center justify-between p-[20px]'>
            <img src="src/assets/img (2).png" className='w-[70px]' alt="" />
            <p className='text-[20px] font-[700]'>Пицца “Рикша”</p>
            <img src="src/assets/counter.png" alt="" />
            <Delete sx={{color:"red"}} />
          </div>
        </aside>
        <aside className='right flex flex-col gap-[20px]'>
          <div className='p-[20px] bg-gray-100 rounded-[10px]'>
            <h1 className='text-[25px] font-[600]'>Контактные данные</h1>
            <div className='flex gap-[10px]'>
              <TextField label="Ваше Имя" />
              <TextField label="Телефон" />
            </div>
          </div>
          <div className='p-[20px] bg-gray-100 rounded-[10px]'>
            <h1 className='text-[25px] font-[600]'>Контактные данные</h1>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>xs=8</Item>
                </Grid>
              </Grid>
            </Box>
            <img src="src/assets/map (1).png" className='w-[100%] my-[20px]' alt="" />
            <h1>Доставим за 40 мин</h1>
          </div>
          <div className='p-[20px] bg-gray-100 rounded-[10px]'>
            <h1 className='text-[25px] font-[600]'>Параметры оплаты</h1>
            <img src="src/assets/list.png" className='my-[20px]' alt="" />
            <div className='flex gap-[10px]'>
              <TextField label="Ваше Имя" />
              <TextField label="Телефон" />
            </div>
          </div>
          <div className='p-[20px] bg-gray-100 rounded-[10px] flex flex-col'>
            <h1 className='text-[25px] font-[600]'>Последний шаг</h1>
            <img src="src/assets/ct.png" className='my-[20px]' alt="" />
            <div className='flex gap-[10px]'>
              <TextField label="Ваше Имя" />
              <TextField label="Телефон" />
            </div>
            <div className='flex gap-[10px]'>
              <TextField label="Промокод" />
              <TextField label="Применить" />
            </div>
            <h1 className='text-[25px] font-[600]'>Итоговая сумма заказа 729 ₽ </h1>
            <Button variant='contained' color='warning'>Подтвердить заказ</Button>   
          </div>
        </aside>
      </div>
    </section>
    </>
  )
}

export default About