import React from "react";
import { BsCamera } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./nav.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar = () => {
    return (
        <>
            <div className="nv d-flex py-4 justify-content-between align-items-center gap-1 px-4">
                <div className="brand d-flex justify-content-between align-items-center gap-2">
                    <div>
                        <BsCamera size={30} color="green" />
                    </div>
                    <h2>PhotoFolio</h2>
                </div>
                <div className="items d-flex justify-content-between align-items-center gap-5">
                    <h6>HOME</h6>
                    <h6>ABOUT</h6>
                    <div className="main gallery d-flex justify-content-between align-items-center gap-0 flex-column mt-2">
                        <div className="pic"> <h6>
                            GALLERY<RiArrowDropDownLine size={30} />
                        </h6></div>
                        <div className="lists">
                            <ul className="block px-2 py-2  rounded-1">
                                <li className="mt-2 mb-3">Nature</li>
                                <li className="mb-3">People</li>
                                <li className="mb-3">Architecture</li>
                                <li className="mb-3">Animals</li>
                                <li className="mb-3">Sports</li>
                                <li className="mb-3">Travels</li>
                                <li className="mb-3">Sub Menu </li>
                            </ul></div>

                    </div>
                    <h6>SERVICES</h6>
                    <h6>CONTACT</h6>
                </div>
                <div className="social-icons d-flex justify-content-between align-items-center gap-3">
                    <FaTwitter size={20} />

                    <FaFacebook size={20} />
                    <FaInstagram size={20} />
                    <FaLinkedin size={20} />
                </div>
            </div>
        </>
    );
};

export default NavBar;
