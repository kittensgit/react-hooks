import React from 'react'
import { useAlert } from './alert/AlertContext'

export default function Main() {
    const {toggle} = useAlert()
  return (
    <>
        <h1>hello in the example context</h1>
        <button onClick={toggle}>show alert</button>
    </>
  )
}
