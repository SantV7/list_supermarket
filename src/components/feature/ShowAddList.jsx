import '../../styles/showaddlist.css/showaddlist.css'


const ShowAddList = () => {



  return (
    <>
      <div className="addItemList">
        <h2>Adicionar Item</h2>

        <div id='category_area_input' className="input-add-list">
            <label htmlFor="category_input">Categoria:</label>
            <input type="text" id='category_input' placeholder="Adicionar categoria" />       
        </div>

        <div id='input_area_input' className="input-add-list">
          <label htmlFor="item_input">Item:</label>
          <input type="text" id='item_input' placeholder='Adicionar item' />
        </div>

      </div>
    </>
  )
}

export default ShowAddList