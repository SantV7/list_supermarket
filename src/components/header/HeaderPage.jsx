import React, { useState } from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { MdRemoveShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import '../../styles/headerStyle/headerpage.css'
import { IoBagAdd } from "react-icons/io5";
import ShowAddList from '../feature/ShowAddList';


// import { FaCheck } from "react-icons/fa"; <FaCheck size={21} id='check_icon' />
// import { IoClose } from "react-icons/io5";  <IoClose id='close_item_list_icon' size={30} />

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
