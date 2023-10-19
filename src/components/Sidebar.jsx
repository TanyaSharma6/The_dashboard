import React from 'react';
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";

import { NavLink } from 'react-router-dom';
import dashboardImg from '../images/silver-settings-icon-free-png.webp'

const Sidebar = ({children}) => {
   
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"Product",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Customers",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Income",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Promote",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Help",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container-df">
           <div style={{}} className="sidebar">
               <div className="top_section">
               <img src={dashboardImg} alt='dashboard' width='20%' /><h1 style={{ marginLeft:'8px'}} className="logo"> Dashboard</h1>
                   <div className="bars">
                    
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{}} className="link_text">{item.name} </div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
