import React from 'react'
import { useAlert } from './AlertContext'

export default function Alert() {

    const alert = useAlert()

    if(!alert.visible) return null

  return (
    <div onClick={alert.toggle}>
       this is a very important message
    </div>
  )
}
