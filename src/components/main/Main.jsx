import React from 'react'
import '../../styles/main/main.css'

const Main = ({ categories = [] }) => {

  return (
    <>
      <main>

        <section id='area_list_itens'>

          <div className="see_your_list">
            <h2>Sua lista</h2>
          </div>

          <section id='cards_itens_area'>

            {categories.map((item, index) => (
              <div className="storage_list" key={index}>
                <h3>{item.category}</h3>
                <p>{item.item}</p>
              </div>
            ))}

          </section>

        </section>
      </main>
    </>
  )
}

export default Main
