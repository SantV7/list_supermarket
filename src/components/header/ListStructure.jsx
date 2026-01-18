import React from 'react'
import '../../styles/headerStyle/liststructure.css'
import { FaCheck } from "react-icons/fa";
const ListStructure = () => {

    const listProducts = ['Tester', 'Just test']


    return (
    <ul id='ul_list'>
        {listProducts.map((item) => (
            <li>{item} <FaCheck size={21} id='check_icon' /></li>
        ))} 
    </ul>
  )
}

export default ListStructure