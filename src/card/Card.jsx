import React from 'react'
import Cards from './Cards'
import { card_data } from './card-data'


const Card = () => {
    return (
        <>
            < div className="row justify-content-center align-items-center mt-5 mx-1">
                {card_data.map((item) => {
                    return <Cards {...item} />


                })}


            </div >

        </>
    )
}

export default Card