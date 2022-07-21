import React from 'react'
import {useLocation} from 'react-router-dom';

function Recipe() {
    const location = useLocation();
  return (
    <div>{location.state.item.title}</div>
  )
}

export default Recipe