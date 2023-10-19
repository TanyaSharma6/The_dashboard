import { Box, Grid } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import money from '../images/money-sign.png';
import order from '../images/order-sign.png';
import balance from '../images/money-balance.jpg';
import shopping from '../images/shopping.png';
import GridLongTable from "../components/GridLongTable";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  return (
    <div>
      <h1>Hello Shahrukh 👋</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>
              <div className="row gridItem">
                <div className="col-sm-6">
                    <img src={money} alt="Green-money" />
                </div>
                <div className="col-sm-6 grid-text">
                  <small>Earning</small>
                  <h3 className="price">$198k</h3>
                  <p>
                    <span class="icon icon-up"></span>
                    <span className="icon-text"> 37% </span>this month
                </p>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <div className="row gridItem">
                <div className="col-sm-6">
                    <img src={order} alt="orders" />
                </div>
                <div className="col-sm-6 grid-text">
                  <small>Order</small>
                  <h3  className="price">$2.4k</h3>
                  <p>
                    <span class="icon icon-down"></span>
                    <span className="icon-red"> 2% </span> this month</p>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <div className="row gridItem">
                <div className="col-sm-6">
                    <img src={balance} alt="balance" />
                </div>
                <div className="col-sm-6 grid-text">
                  <small>Balance</small>
                  <h3  className="price">$2.4k</h3>
                  <p><span class="icon icon-down"></span>
                    <span className="icon-red"> 2% </span> this month</p>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <div className="row gridItem">
                <div className="col-sm-6">
                     <img src={shopping} alt="shopping" />
                </div>
                <div className="col-sm-6 grid-text">
                  <small>Total Sale</small>
                  <h3  className="price">$89k</h3>
                  <p>
                    <span class="icon icon-up"></span>
                    <span className="icon-text"> 11% </span>this week
                </p>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>


      <Grid container spacing={2} className="table-grid">
          <Grid item xs={12} >
            <Item className="grid-body">
                <div className="row">
                  <div className="col-sm-5">
                      <h3>Product Sell</h3>
                  </div>
                  <div className="col-sm-7 ">
                    <div  className="row float-right">
                        <div className="col-sm-6 float-item">
                          <form class="d-flex">
                            <input class="form-control me-2 mainLoginInput" type="search" placeholder="&#61442;  Search" aria-label="Search"/>
                          </form>
                        </div>
                        <div class="dropdown col-sm-6 float-item">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                last 30 Days
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#re">last 45 Days</a></li>
                                <li><a class="dropdown-item" href="#we">last 60 Days</a></li>
                                
                              </ul>
                        </div>
                       
                    </div>
                  </div>
                </div>
                

                <GridLongTable/>
            </Item>
           </Grid>
        </Grid>    
    </div>
  );
};

export default Dashboard;
