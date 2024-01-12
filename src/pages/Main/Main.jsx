import React from "react";
import { useState, useEffect, useRef } from "react";
import "./main.css"

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../../Components/Card";

/// swiper2
import { EffectCards } from 'swiper/modules';
import 'swiper/css/effect-cards';
import { Button } from "@mui/material";
import Swager from "../../Components/Swager/Swager";

const Main = () => {
  return (
    <>
      <section className="section1 p-[20px] lg:px-[80px] xl:px-[100px] 2xl:px-[200px]">
        <Swager />
      </section>
      <section className="section2 flex flex-wrap my-[100px] items-center justify-around p-[20px] lg:px-[80px] xl:px-[120px] 2xl:px-[200px]">
        <img src="src/assets/2 (1).png" alt="" />
        <img src="src/assets/2 (1).png" alt="" />
        <img src="src/assets/2 (1).png" alt="" />
        <img src="src/assets/2 (1).png" alt="" />
      </section>
      <section className="section3">
        <h1 className="text-[30px] p-[20px] text-center lg:text-start lg:ml-[80px] xl:ml-[130px] 2xl:ml-[200px] my-[50px] font-[700] lg:text-[40px] xl:text-[45px]">Топ позиции <span className="text-gray-500">Новинки</span> </h1>
        <div className="flex items-center gap-[20px] justify-around flex-wrap lg:px-[80px] xl:px-[120px] 2xl:px-[200px]">
          <Card img={"src/assets/img (1).png"} name={"Ролл Филадельфия"} price={"219 ₽"} />
          <Card img={"src/assets/img (2).png"} name={"Ролл Филадельфия"} price={"219 ₽"} />
          <Card img={"src/assets/img (1).png"} name={"Ролл Филадельфия"} price={"219 ₽"} />
        </div>
        <h1 className="text-[30px] p-[20px] text-center lg:text-start lg:ml-[80px] xl:ml-[130px] 2xl:ml-[200px] my-[50px] font-[700] lg:text-[40px] xl:text-[45px]"> Комбо меню</h1>
        <div className="flex items-center gap-[20px] justify-around flex-wrap lg:px-[80px] xl:px-[120px] 2xl:px-[200px] my-[50px]">
          <Card img={"src/assets/img (2).png"} name={"Ролл Филадельфия"} price={"219 ₽"} />
          <Card img={"src/assets/img (1).png"} name={"Ролл Филадельфия"} price={"219 ₽"} />
          <Card img={"src/assets/img (2).png"} name={"Ролл Филадельфия"} price={"219 ₽"} />
        </div>
      </section>
      <section className="section4">
        <h1 className="text-[30px] p-[20px] text-center lg:text-start lg:ml-[80px] xl:ml-[130px] 2xl:ml-[200px] my-[50px] font-[700] lg:text-[40px] xl:text-[45px]"> Категории </h1>
        <img src="src/assets/filters.png" className="m-auto" alt="" />
          <div className="flex items-center gap-[20px] justify-around flex-wrap lg:px-[80px] xl:px-[120px] 2xl:px-[200px] my-[100px]">
            <Card img={"src/assets/img (2).png"} name={"Ролл Филадельфия"} price={"219 ₽"} />
            <Card img={"src/assets/img (1).png"} name={"Ролл Филадельфия"} price={"219 ₽"} />
            <Card img={"src/assets/img (2).png"} name={"Ролл Филадельфия"} price={"219 ₽"} />
            <Card img={"src/assets/img (2).png"} name={"Ролл Филадельфия"} price={"219 ₽"} />
            <Card img={"src/assets/img (1).png"} name={"Ролл Филадельфия"} price={"219 ₽"} />
            <Card img={"src/assets/img (2).png"} name={"Ролл Филадельфия"} price={"219 ₽"} />
          </div>
      </section>
      <section className="section5 p-[20px] lg:flex my-[100px] items-center justify-around lg:px-[80px] xl:px-[120px] 2xl:px-[200px]">
        <aside className="left lg:w-[500px]">
          <h1 className="text-[20px] font-[600] lg:text-[35px]">О компании</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tenetur veritatis impedit velit sequi, perferendis tempora vero laborum provident, laudantium, iure quisquam! Dolores quia possimus eos aliquid architecto illo ab assumenda porro perferendis inventore molestiae necessitatibus quos nam, illum voluptas quod rem impedit corrupti? Assumenda repellendus nostrum facilis temporibus laboriosam velit, vitae dolores, ut debitis quae iure similique saepe provident?</p>
        </aside>
        <div>
          <div className="flex items-center flex-wrap">
            <img src="src/assets/img 1.png" className="w-[300px]" alt="" />
            <img src="src/assets/img 2.png" className="w-[200px]" alt="" />
          </div>
        </div>
      </section>
      <section className="section6">
        <div className="flex my-[50px] items-center justify-between flex-wrap p-[20px] lg:px-[80px] xl:px-[120px] 2xl:px-[200px]">
          <h1 className="text-[20px] lg:w-[60%] xl:w-[40%] font-[600] lg:text-[35px]">А вы уже подписались на наш <span className="text-orange-500">Instagram</span></h1>
          <Button variant="contained" color="warning">@riksha_sushi</Button>
        </div>
        <div className="p-[20px] lg:px-[80px] xl:px-[130px] 2xl:px-[200px] grid grid-cols-4 gap-[10px]">
          <div> <img src="src/assets/1 (1).png" alt="" /> </div>
          <div> <img src="src/assets/2 (2).png" alt="" /> </div>
          <div> <img src="src/assets/3.png" alt="" /> </div>
          <div> <img src="src/assets/6 (1).png" alt="" /> </div>
          <div className="col-span-2"> <img src="src/assets/4.png"  alt="" /> </div>
          <div> <img src="src/assets/5.png" alt="" /> </div>
        </div>
      </section>
    </>
  );
};

export default Main;
