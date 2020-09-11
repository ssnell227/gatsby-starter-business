import React from 'react'

import './styles.scss'


const InfoBlock = ({ content, imgSize }) => (
  <div className='section'>
    <article className='columns'>
      <div className='column is-4'>
          <figure className={`image is-square`}>
            <img  src={content.image} />
          </figure>
        </div>
      <div className='column is-8'>
        <div className='content'>
          <h2>{content.title}</h2>
          <ul>
            {content.listitem.map((item, index) => (
              <li key={`info-item-${index}`}>
                {item.title && <h3>{item.title}</h3>}
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  </div>
)

export default InfoBlock


