import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const Layout = (props) => {
  let { pathname } = useLocation();


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <ul className="flex cursor-pointer items-start pl-[50px] flex-col p-[10px] gap-[10px] text-[20px] font-[600]">
        <Link to="/">
          <li>Main</li>
        </Link>
        <Divider />
        <Link to="/product">
          <li>Products</li>
        </Link>
        <Divider />
        <Link to="/about">
          <li>About</li>
        </Link>
        <Divider />
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <header className="header">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar component="nav">
            <Toolbar className="bg-gray-50 text-black flex justify-between p-[20px] lg:p-[0]">
              <div className="flex items-center gap-[30px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px]">
                <Typography variant="h6" component="div">
                  <img
                    src="src/assets/logo (3).png"
                    className="w-[80px] lg:w-[100px]"
                    alt=""
                  />
                </Typography>
                <div className="hidden sm:flex flex-col items-center">
                  <div className="flex items-center gap-[50px] p-[15px]">
                    <ul className="flex cursor-pointer items-start pl-[50px] p-[10px] gap-[20px] xl:text-[20px] lg:font-[600]">
                      <Link to="/">
                        <li className={ pathname == "/" ? "border-b-[3px] border-[blue]" : "border-b-[3px] border-transparent" }>Main</li>
                      </Link>
                      <Divider />
                      <Link to="/product">
                        <li className={ pathname == "/product" ? "border-b-[3px] border-[blue]" : "border-b-[3px] border-transparent" }>Products</li>
                      </Link>
                      <Divider />
                      <Link to="/about">
                        <li className={ pathname == "/about" ? "border-b-[3px] border-[blue]" : "border-b-[3px] border-transparent" }>About</li>
                      </Link>
                      <Divider />
                      <Link to="/contact">
                        <li className={ pathname == "/contact" ? "border-b-[3px] border-[blue]" : "border-b-[3px] border-transparent" }>Contact</li>
                      </Link>
                    </ul>
                    <div className="xl:flex items-center gap-[20px] hidden">
                      <h1 className="text-[20px] font-[700] w-[150px]">
                        +7 (495) 617-14{" "}
                        <span className="text-[16px]"> c 10:00 до 23:00</span>
                      </h1>
                      <img src="src/assets/cart (1).png" alt="" />
                      <img src="src/assets/profilie.png" alt="" />
                    </div>
                  </div>
                  <div className="bg-gray-100 p-[15px] rounded-[10px] hidden sm:block">
                    <ul className="flex items-center flex-wrap justify-around gap-[20px]">
                      <li className="w-[80px]">
                        <img src="src/assets/pizza.png" alt="" />
                        <p>Пицца</p>
                      </li>
                      <li className="w-[80px]">
                        <img src="src/assets/sushi.png" alt="" />
                        <p>Суши</p>
                      </li>
                      <li className="w-[80px]">
                        <img src="src/assets/rolle.png" alt="" />
                        <p>Роллы</p>
                      </li>
                      <li className="w-[80px]">
                        <img src="src/assets/set.png" alt="" />
                        <p>Сеты</p>
                      </li>
                      <li className="w-[80px]">
                        <img src="src/assets/wok.png" alt="" />
                        <p>Wok</p>
                      </li>
                      <li className="w-[80px]">
                        <img src="src/assets/pizza.png" alt="" />
                        <p>Пицца</p>
                      </li>
                      <li className="w-[80px]">
                        <img src="src/assets/sushi.png" alt="" />
                        <p>Суши</p>
                      </li>
                      <li className="w-[80px]">
                        <img src="src/assets/rolle.png" alt="" />
                        <p>Роллы</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      </header>
      <main className="main mt-[200px]">
        <Outlet />
      </main>
      <footer className="footer bg-black text-white flex items-center flex-wrap justify-around p-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[150px]">
        <img src="src/assets/logo (4).png" className="w-[70px] lg:w-[100px]" alt="" />
        <div className="flex flex-col gap-[10px] items-start">
          <ul className="flex items-center gap-[20px]">
            <li>О нас</li>
            <li>Доставка и оплата</li>
            <li>Контакты</li>
          </ul>
          <img src="src/assets/social.png" alt="" />
        </div>
        <ul className="flex items-center gap-[20px] flex-wrap w-[350px]">
          <li>Пицца</li>
          <li>Суши</li>
          <li>Роллы</li>
          <li>Сеты</li>
          <li>Wok</li>
          <li>Супы</li>
          <li>Салаты</li>
          <li>Десерты</li>
          <li>Напитки</li>
        </ul>
        <div className="flex flex-col gap-=[10px]">
          <h1 className="text-[20px] lg:text-[25px] font-[700]">+7 (495) 617-14-24</h1>
          <p>c 10:00 до 23:00</p>
          <p className="text-[14px] text-gray-300">© Рикша. Все права защищены.</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
