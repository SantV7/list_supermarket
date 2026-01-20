import React, { useState } from 'react'
import '../../styles/headerStyle/liststructure.css'
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
const ListStructure = () => {

    
    const [listProducts , setListProducts ] = useState([])

    

    return (
         <>
          <ul id='ul_list'>
              {listProducts.map((item) => (
                  <li>{item} <FaCheck size={21} id='check_icon' /> <IoClose id='close_item_list_icon' size={30} /></li>
              ))} 
          </ul>  
         </>
  )
}

export default ListStructure