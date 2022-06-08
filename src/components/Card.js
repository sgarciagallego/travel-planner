import React from 'react';
import Location from './icons/Location'

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card--img'>
        <img src={props.item.img} alt='visual representation of the locations' />
      </div>
      <div className='card--content'>
        <div role='doc-subtitle'>
          <span className='card--icon'><Location /></span>
          <span className='card--location'>{props.item.location.toUpperCase()}</span>
          <span className='card--url'>
            <a href={props.item.url} target='_blank' rel='noreferrer'>View on Google Maps</a>
          </span>
        </div>
        <h2>{props.item.title}</h2>
        <p className='strong'>{props.item.date.start} - {props.item.date.end}</p>
        <p>{props.item.description}</p>
      </div>
    </div>
  )
}

export default Card;