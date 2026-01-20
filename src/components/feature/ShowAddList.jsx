import '../../styles/showaddlist.css/showaddlist.css'
import { FaLongArrowAltRight } from "react-icons/fa";

const ShowAddList = () => {



  return (
    <>
      <div className="addItemList">
        <h2>Adicionar Item</h2>

        <div id='category_area_input' className="input-add-list">
            <label htmlFor="category_input">Categoria<FaLongArrowAltRight size={25}  className='arrow-to-input'/></label>
            <input type="text" id='category_input' placeholder="Adicionar" />       
        </div>

        <div id='input_area_input' className="input-add-list">
          <label htmlFor="item_input">Item <FaLongArrowAltRight  size={25} className='arrow-to-input'/></label>
          <input type="text" id='item_input' placeholder='Adicionar' />
        </div>

        <button id='add_adn_save_on_list'>Adicionar a lista</button>

      </div>
    </>
  )
}

export default ShowAddList