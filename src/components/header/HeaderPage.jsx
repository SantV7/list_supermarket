import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { MdRemoveShoppingCart } from "react-icons/md";


const HeaderPage = () => {

  const [statusBtnCart, SetStatusBtnCart] = useState(false)



  return (
      <>
      <header>

        <div className="searchItens">
           <input type="search" placeholder='Pesquisar item da lista'  id="btnsearch" />

           <div onClick={() => SetStatusBtnCart(!statusBtnCart)} className="area_cart">
             {statusBtnCart
               ? <FaCartShopping size={40} />
               : <MdRemoveShoppingCart size={40} />
             }
           </div>
        </div>

      </header>
      </>
  )
}

export default HeaderPage