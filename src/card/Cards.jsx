import React from 'react'
import { CiMaximize1 } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import './card.css'



const Cards = ({ img }
) => {
    return (
        <>
            <div className="col-lg-3 mb-3">
                <div className="card crd my-1">

                    <div className="underlay">
                        <img style={{ width: '100%' }} src={img} alt="" />
                    </div>
                    <div className="overlay">
                        <div className="d-flex gap-2 img-icons">
                            <div className="max">
                                <CiMaximize1 />
                            </div>
                            <div className="link">
                                <FaLink />

                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Cards