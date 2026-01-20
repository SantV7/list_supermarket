import React, { useState } from 'react'
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

  const [categories, setCategories] = useState([]);
  
  const [items, setItems] = useState([]);



   function saveValue(saveAddCategory, saveAddItem) {
    alert(`Categoria: ${saveAddCategory} e itens: ${saveAddItem}`)
     setCategories(saveAddCategory)
     setItems(saveAddItem)
  }


  function showAddList() {
    SetAddList(!addList)
  }

  function closeAddList() {
    SetAddList(false)
  }


  return (
      <>
      <header id='header'>

        <div className="searchItens" id="searchSearch">
           <div className="area_search">
             <input type="search" placeholder='Pesquisar item'   />
             <CiSearch size={30} id='search_icon' />
           </div>


             <IoBagAdd onClick={() => showAddList()} id='icon_add_list' size={35} />

             {
              addList
              ? (<ShowAddList saveValue={saveValue} closeAddList={closeAddList}/>)
              : ('')
             }

           <div onClick={() => SetStatusBtnCart(!statusBtnCart)} className="area_cart">
             {statusBtnCart
               ? <MdAddShoppingCart size={33} />
               : <MdRemoveShoppingCart size={33} />
             }


             {
              statusBtnCart
              ? ('')
              : (
                <div className="menuList">
                   <section className='section_category' >
                      <h2 className='tittle_category'>{categories}</h2>
                      <ListStructure />
                   </section>

                   <section className='section_category' >
                      <h2 className='tittle_category'>{categories}</h2>
                      <ListStructure />
                   </section>

                   <section className='section_category' >
                      <h2 className='tittle_category'>{categories}</h2>
                      <ListStructure />
                   </section>

                   <section className='section_category' >
                      <h2 className='tittle_category'>{categories}</h2>
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
