import React from 'react'
import style from './card.module.css'

export function Card(props){
  return <div className={style.card}>
    {props.children}
  </div>
}
