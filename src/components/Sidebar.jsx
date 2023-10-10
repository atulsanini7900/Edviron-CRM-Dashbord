import React, { useState } from 'react'
import { AiOutlineAntDesign, AiOutlineFileProtect, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";

import { PiStudentBold } from "react-icons/pi";

const Sidebar = () => {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled")
        } else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    }

   
    return (
        <div>
            <ul className={style} id="accordionSidebar">
                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" >
                    <div className="sidebar-brand-icon rotate-n-15">
                        {/* <i class="fa fa-connectdevelop" aria-hidden="true"></i> */}

                        <AiOutlineAntDesign style={{ fontSize: '40px' }} />

                    </div>
                    <div className="sidebar-brand-text mx-2">Edviron  <sub>v.01</sub></div>
                </a>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span></a>
                </li>
                {/* Divider */}

                {/* Heading */}

                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <MdPayments style={{ marginRight: '7px' }} />
                        <span>Fee Management</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header"> Fee Category</h6>
                            <a className="collapse-item" href="buttons.html">Item 1</a>
                            <a className="collapse-item" href="cards.html">Item 1</a>
                        </div>
                    </div>
                </li>
                {/* Nav Item - Utilities Collapse Menu */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                        <PiStudentBold style={{ marginRight: '7px' }} />
                        <span>Students</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Category</h6>
                            <a className="collapse-item" href="utilities-color.html">Item 1</a>
                            <a className="collapse-item" href="utilities-border.html">Item 2</a>
                            <a className="collapse-item" href="utilities-animation.html">Item 3</a>

                        </div>
                    </div>
                </li>
                {/* Divider */}

                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                        <AiOutlineFileProtect style={{ marginRight: '7px' }} />
                        <span>Disbursal</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Item</h6>
                            <a className="collapse-item" href="login.html">Item</a>
                            <a className="collapse-item" href="register.html">Item</a>

                        </div>
                    </div>
                </li>


                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages2" aria-expanded="true" aria-controls="collapsePages2">
                        <AiOutlineFundProjectionScreen style={{ marginRight: '7px' }} />
                        <span>Promote</span>
                    </a>
                    <div id="collapsePages2" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Item</h6>
                            <a className="collapse-item" href="login.html">Item</a>
                            <a className="collapse-item" href="register.html">Item</a>

                        </div>
                    </div>
                </li>


                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages3" aria-expanded="true" aria-controls="collapsePages2">
                        <BiHelpCircle style={{ marginRight: '7px' }} />
                        <span>Help</span>
                    </a>
                    <div id="collapsePages3" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Item</h6>
                            <a className="collapse-item" href="login.html">Item</a>
                            <a className="collapse-item" href="register.html">Item</a>

                        </div>
                    </div>
                </li>


                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle} />
                </div>

            </ul>

            




        </div>
    )
}

export default Sidebar