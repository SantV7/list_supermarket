import React, { useState } from 'react'
import { MdAddShoppingCart } from "react-icons/md"
import { MdRemoveShoppingCart } from "react-icons/md"
import { CiSearch } from "react-icons/ci"
import { IoBagAdd } from "react-icons/io5"

import ShowAddList from '../feature/ShowAddList'
import Main from '../main/Main'

import '../../styles/headerStyle/headerpage.css'

const HeaderPage = () => {

  const [addList, SetAddList] = useState(false)
  const [statusBtnCart, SetStatusBtnCart] = useState(true)

  // 🪨 LISTA QUE GUARDA TUDO
  const [categories, setCategories] = useState([])

  function saveValue(saveAddCategory, saveAddItem) {

    const newItem = {
      category: saveAddCategory,
      item: saveAddItem
    }

    setCategories([...categories, newItem])
    SetAddList(false)
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
            <input type="search" placeholder='Pesquisar item' />
            <CiSearch size={30} id='search_icon' />
          </div>

          <IoBagAdd
            onClick={showAddList}
            id='icon_add_list'
            size={35}
          />

          {addList && (
            <ShowAddList
              saveValue={saveValue}
              closeAddList={closeAddList}
            />
          )}

          <div
            onClick={() => SetStatusBtnCart(!statusBtnCart)}
            className="area_cart"
          >
            {statusBtnCart
              ? <MdAddShoppingCart size={33} />
              : <MdRemoveShoppingCart size={33} />
            }

            {!statusBtnCart && (
              <div className="menuList"></div>
            )}
          </div>

        </div>
      </header>

      {/* 🪨 A LISTA VAI PRO MAIN */}
      <Main categories={categories} />
    </>
  )
}

export default HeaderPage
