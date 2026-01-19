import React, { use, useState } from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { MdRemoveShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import '../../styles/headerStyle/headerpage.css'
import { IoBagAdd } from "react-icons/io5";
import ListStructure from './ListStructure';
import ShowAddList from '../feature/ShowAddList';




const HeaderPage = () => {

  const [addList, SetAddList] = useState(false)

  const [statusBtnCart, SetStatusBtnCart] = useState(true)

  function showAddList() {
    SetAddList(!addList)

     addList
     ? <ShowAddList />
     : ('')
  }



  return (
      <>
      <header id='header'>

        <div className="searchItens" id="searchSearch">
           <div className="area_search">
             <input type="search" placeholder='Pesquisar item'   />
             <CiSearch size={30} id='search_icon' />
           </div>

             <IoBagAdd onClick={() => showAddList()} id='icon_add_list' size={37} />

           <div onClick={() => SetStatusBtnCart(!statusBtnCart)} className="area_cart">
             {statusBtnCart
               ? <MdAddShoppingCart size={33} />
               : <MdRemoveShoppingCart size={33} />
             }

             {
              statusBtnCart
              ? (
                 ''
              )
              : (
                <div className="menuList">
                   <section className='section_category' id='basic_section'>
                      <h2 className='tittle_category'>Básicos</h2>

                    <ListStructure />
                   </section>

                   <section className='section_category' id='basic_section'>
                      <h2 className='tittle_category'>Lanches</h2>

                    <ListStructure />
                   </section>

                   <section className='section_category' id='fruits_and_vegetables_section'>
                      <h2 className='tittle_category'>frutas e legumes</h2><ListStructure />
                   </section>

                   <section className='section_category' id='bebidas_section'>
                      <h2 className='tittle_category'>Bebidas</h2>

                      <ListStructure />
                   </section>
                 </div>                
              )
             }
           </div>
        </div>

      </header>
      </>
  )
}

export default HeaderPage