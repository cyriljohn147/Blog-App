import React from 'react'
import Category from './Category'

const Categories = ({categories}: {categories: any}) => {
  return (
    <div className='flex w-full items-start gap-4 py-8' >
      {categories?.map((category:any) => (
        <div key={category.$id}>
          <Category cat={category} />
        </div>
      ))}
    </div>
  )
}

export default Categories
