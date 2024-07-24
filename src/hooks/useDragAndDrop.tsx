'use client'

import { DragEvent, useCallback } from 'react'

const useDragAndDrop = () => {
  const allowDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }, [])

  const handleOnDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const element = event.dataTransfer.getData('item')
    const target = event.target as HTMLDivElement
    const draggedElement = document.getElementById(element)
    if (draggedElement) {
      target.appendChild(draggedElement)
    }
  }, [])

  const handleOnDrag = useCallback((event: DragEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement
    event.dataTransfer.setData('item', target.id)
  }, [])

  return {
    allowDrop,
    handleOnDrop,
    handleOnDrag
  }
}

export default useDragAndDrop
