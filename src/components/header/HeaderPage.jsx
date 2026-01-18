import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { MdRemoveShoppingCart } from "react-icons/md";
import '../../styles/headerStyle/headerpage.css'

const HeaderPage = () => {

  const [statusBtnCart, SetStatusBtnCart] = useState(true)



  return (
      <>
      <header id='header'>

        <div className="searchItens">
           <input type="search" placeholder='Pesquisar item'  id="searchSearch" />

           <div onClick={() => SetStatusBtnCart(!statusBtnCart)} className="area_cart">
             {statusBtnCart
               ? <FaCartShopping size={35} />
               : <MdRemoveShoppingCart size={35} />
             }
           </div>
        </div>

      </header>
      </>
  )
}

export default HeaderPage