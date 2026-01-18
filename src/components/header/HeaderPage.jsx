import React, { useState } from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { MdRemoveShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import '../../styles/headerStyle/headerpage.css'

const HeaderPage = () => {

  const [statusBtnCart, SetStatusBtnCart] = useState(true)



  return (
      <>
      <header id='header'>

        <div className="searchItens" id="searchSearch">
           <div className="area_search">
             <input type="search" placeholder='Pesquisar item'   />
             <CiSearch size={30} id='search_icon' />
           </div>

           <div onClick={() => SetStatusBtnCart(!statusBtnCart)} className="area_cart">
             {statusBtnCart
               ? <MdAddShoppingCart size={33} />
               : <MdRemoveShoppingCart size={33} />
             }

             {
              statusBtnCart
              ? (
                 <div className="menuList">
                  <section id='basic_section'>
                    <h2 className='tittle_category'>Básicos</h2>
                  </section>

                  <section id='basic_section'>
                    <h2 className='tittle_category'>Lanches</h2>
                  </section>

                  <section id='fruits_and_vegetables_section'>
                    <h2 className='tittle_category'>frutas e legumes</h2>
                  </section>

                  <section id='bebidas_section'>
                    <h2 className='tittle_category'>Bebidas</h2>
                  </section>
                 </div>
              )
              : ('')
             }
           </div>
        </div>

      </header>
      </>
  )
}

export default HeaderPage