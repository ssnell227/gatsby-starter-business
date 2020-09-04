import React from 'react'


const InfoBlock = ({ content }) => (
  <div className='section'>
    <article className='media'>
      <figure className='media-left'>
        <img src={content.image} />
      </figure>
      <div className='media-content'>
        <div className='content'>
          <h2>{content.title}</h2>
          <ul>
            <li>{content.list[0]}</li>
            <li>{content.list[1]}</li>
            <li>{content.list[2]}</li>
          </ul>
        </div>
      </div>
    </article>
  </div>
)

export default InfoBlock


