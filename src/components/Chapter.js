import React, { useState } from 'react'

const Chapter = ({ chapters, chapterHandler }) => {

  console.log(chapters)
  const [activeId, setActiveId] = useState('')

  return (
    <div className="surah-area ">
      <h3 className='surah'>Surah</h3>

      <div className="row">

        {chapters.map((chapters) => (

          <div className="col-lg-3 mb-3" key={chapters.id}>
            <div
              onClick={(e) => {
                chapterHandler(chapters)
                setActiveId(chapters.id)
              }} className={chapters.id === activeId && 'active'} >


              <a className="single-chapter " href="#">

                {/* {chapters.id} */}

                <h4>{chapters.name_simple} <span>{chapters.revelation_place}</span> </h4>

                <h3> {chapters.name_arabic}</h3>

              </a>

            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Chapter
