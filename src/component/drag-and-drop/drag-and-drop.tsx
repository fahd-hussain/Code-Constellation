'use client'

import { useDragAndDrop } from 'hooks'

const DragAndDrop = () => {
  const { allowDrop, handleOnDrag, handleOnDrop } = useDragAndDrop()

  return (
    <div className='flex gap-2 justify-center bg-gray900'>
      <div
        className='h-32 w-32 border-2 border-dashed border-white100'
        onDrop={handleOnDrop}
        onDragOver={allowDrop}>
        <div
          id='item'
          className='h-32 w-32 border-8 bg-white100'
          draggable
          onDragStart={handleOnDrag}></div>
      </div>
      <div
        className='h-32 w-32 border-2 border-dashed border-white100'
        onDrop={handleOnDrop}
        onDragOver={allowDrop}></div>
      <div
        className='h-32 w-32 border-2 border-dashed border-white100'
        onDrop={handleOnDrop}
        onDragOver={allowDrop}></div>
    </div>
  )
}

export default DragAndDrop
