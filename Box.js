import React, { useState } from 'react'

export default function Box(props) {
  const styles = { backgroundColor: props.on ? '#3399ff' : 'transparent' }

  return (
    <div
      className='box'
      style={styles}
      onClick={() => props.toggle(props.id)}
    ></div>
  )
}
