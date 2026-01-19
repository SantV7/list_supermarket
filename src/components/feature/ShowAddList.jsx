import '../../styles/showaddlist.css/showaddlist.css'


const ShowAddList = () => {


  return (
    <>
      <div className="addItemList">
        <h2>Adicionar Item</h2>
        <input onClick={(e) => e.target.value} type="text" placeholder="Adicionar" />
      </div>
    </>
  )
}

export default ShowAddList