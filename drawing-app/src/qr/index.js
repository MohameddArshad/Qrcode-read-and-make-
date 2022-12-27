import React from 'react'
import Createqr from './createqr'
import Read from './read'
import {Div} from './style'
const Index = () => {
  return (
    <Div display="flex">
      <Createqr/>
      <Read/>
    </Div>
  )
}

export default Index
