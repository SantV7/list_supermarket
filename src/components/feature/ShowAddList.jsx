import { useState } from 'react';
import '../../styles/showaddlist.css/showaddlist.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";


const ShowAddList = ({closeAddList}) => {

  let [saveAddCategory, setSaveAddCtegory] = useState('')
      
  let [saveAddItem, setSaveAddItem] = useState('')
      
  function saveValue() {
    // Enviar valor de categoriai e item
  }



  return (
    <>
      <div className="addItemList">
        <h2>Adicionar Item</h2>

        <IoCloseCircle onClick={() => closeAddList()} 
         id='close_icon_add_list' size={40} 
        />

        <div id='category_area_input' className="input-add-list">
            <label htmlFor="category_input">Categoria<FaLongArrowAltRight 
             size={25} className='arrow-to-input'/>
            </label>
            <input type="text" onChange={(e) => setSaveAddCtegory(e.target.value)} id='category_input' placeholder="Adicionar" />       
        </div>


        <div id='input_area_input' className="input-add-list">
          <label htmlFor="item_input">Item <FaLongArrowAltRight
            size={25} className='arrow-to-input'/>
           </label>
          <input type="text" onChange={(e) => setSaveAddItem(e.target.value)} id='item_input' placeholder='Adicionar' />
        </div>

        <button onClick={() => saveValue()} id='add_adn_save_on_list'>Adicionar a lista</button>

      </div>
    </>
  )
}

export default ShowAddList