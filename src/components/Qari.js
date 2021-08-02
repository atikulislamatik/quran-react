import React, { useEffect, useState } from 'react'

const Qari = ({ quri, quriHandler }) => {
  const [activeId, setActiveId] = useState('')

  return (
    <div className="quri-area ptb-70">
      <div className='row'>
        <h3 className='surah'>Quri</h3>

        {quri.map((quri) => (
          <div className="col-lg-3 mb-3" key={quri.id}>
            <div
              onClick={(e) => {
                quriHandler(quri)
                setActiveId(quri.id)
              }} className={quri.id === activeId && 'active'}>

              <a href="#" className="single-quri">
                <p>{quri.name}</p>
              </a>

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Qari
