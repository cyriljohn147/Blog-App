'use client'
import React from 'react'

const Category = ({cat}: {cat: any}) => {
  //TODO implement context API for selected category
  return (
    <div onClick={() => {}} className={'shrink-0 rounded-lg py-1.5 px-5 text-base font-medium text-white hover:cursor-pointer'}>
      {cat.title.toUpperCase()}
    </div>
  )
}

export default Category
