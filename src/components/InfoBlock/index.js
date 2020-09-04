import React from 'react'


const InfoBlock = ({ content }) => (
  <div className='section'>
    <article className='columns'>
      <div className='column is-4'>
          <figure className='image is-square'>
            <img src={content.image} />
          </figure>
        </div>
      <div className='column is-8'>
        <div className='content'>
          <h2>{content.title}</h2>
          <ul>
            <li>
              <h3>{content.listitem[0].title}</h3>
              <p>{content.listitem[0].text}</p>
            </li>
            <li>
              <h3>{content.listitem[1].title}</h3>
              <p>{content.listitem[1].text}</p>
            </li>
            <li>
              <h3>{content.listitem[2].title}</h3>
              <p>{content.listitem[2].text}</p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </div>
)

export default InfoBlock


