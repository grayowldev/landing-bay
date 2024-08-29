'use client'
import {useState} from "react";

export const Element = ({children, isActive, onClick}) => {

  //   TODO: Active should be a global state

  return (
      <div onClick={onClick} className={`hover:border-2 hover:border-sky-700 ${isActive ? 'border-2 border-sky-700' : ''}`}>
        {children}
      </div>
  )
}