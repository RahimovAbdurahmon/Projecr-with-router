import { Delete, Edit } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
  let API = "http://localhost:3000/data"
  let [todos, setTodos] = useState([])

  /// get
  async function get() {
    try {
      let { data } = await axios.get(API)
      setTodos(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    get()
  }, [])

  return (
    <>
      <section className="section1">
        <h1 className="text-[30px] font-[600] lg:text-[35px] xl:text-[45px] xl:font-[700] p-[20px] lg:pl-[80px] xl:pl-[130px] 2xl:pl-[200px]">
          Суши :{" "}
        </h1>
        <div className="p-[20px] my-[50px] lg:px-[80px] xl:px-[130px] 2xl:px-[200px] flex items-end flex-wrap xl:flex-nowrap">
          <div className="flex items-center gap-[20px] p-[20px] lg:w-[80%] xl:w-[70%] flex-wrap justify-around">
            <Button variant="outlined" color="inherit" startIcon={<Edit />}>
              Лосось
            </Button>
            <Button variant="outlined" color="inherit" startIcon={<Delete />}>
              Лосось
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<AccountCircleIcon />}
            >
              Лосось
            </Button>
            <Button variant="outlined" color="inherit" startIcon={<Edit />}>
              Лосось
            </Button>
            <Button variant="outlined" color="inherit" startIcon={<Delete />}>
              Лосось
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<AccountCircleIcon />}
            >
              Лосось
            </Button>
            <Button variant="outlined" color="inherit" startIcon={<Edit />}>
              Лосось
            </Button>
            <Button variant="outlined" color="inherit" startIcon={<Delete />}>
              Лосось
            </Button>
            <Button variant="outlined" color="inherit" startIcon={<Edit />}>
              Лосось
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<AccountCircleIcon />}
            >
              Лосось
            </Button>
          </div>
          <TextField label="По умолчанию" sx={{ width: "400px" }} />
        </div>
      </section>
      <section className="section2 flex items-center justify-around flex-wrap gap-[20px] lg:px-[80px] xl:px-[120px] 2xl:px-[200px]">
        {todos.map((elem) => {
          return (
            <div key={elem.id} className="w-[300px] p-[20px] bg-gray-100 rounded-[10px]">
              <img src={elem.img} className="w-[100%]" alt="" />
              <h1 className="text-[20px] font-[600] my-[20px]">{elem.name}</h1>
              <div className="flex items-center justify-between">
                <h1 className="text-[20px] font-[600]">{elem.price}</h1>
                <Link to={`product/${elem.id}`}><Button variant="contained" color="warning">Show Product</Button></Link>
              </div>
              <div className="flex items-center gap-[20px]">
                <Delete color="error" />
                <Edit />
              </div>
            </div>
          )
        })}
      </section>
      <section className="section3">
        <section className="section5 p-[20px] lg:flex my-[100px] items-center justify-around lg:px-[80px] xl:px-[120px] 2xl:px-[200px]">
          <aside className="left lg:w-[500px]">
            <h1 className="text-[20px] font-[600] lg:text-[35px]">
              Доставка суши и роллов в Краснодаре
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio temporibus eos voluptates iste. Voluptatum a nulla
              maxime aspernatur earum molestiae? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Odit tenetur veritatis impedit velit
              sequi, perferendis tempora vero laborum provident, laudantium,
              iure quisquam! Dolores quia possimus eos aliquid architecto illo
              ab assumenda porro perferendis inventore molestiae necessitatibus
              quos nam, illum voluptas quod rem impedit corrupti? Assumenda
              repellendus nostrum facilis temporibus laboriosam velit, vitae
              dolores, ut debitis quae iure similique saepe provident?
            </p>
          </aside>
          <div>
            <div className="flex items-center flex-wrap">
              <img src="src/assets/img 1.png" className="w-[300px]" alt="" />
              <img src="src/assets/img 2.png" className="w-[200px]" alt="" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Product;
