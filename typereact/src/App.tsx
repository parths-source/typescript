import React from 'react'
import { Card } from './components/Card'
import { Cups } from './components/Cups'
import type {Cardrop} from './components./Cups'
import { ChaiList } from './components/ChaiList'

const menu: Cardrop[]=[
  {name:"masala" , sugar:1},
  {name:"lemon" , sugar:3},
  {name:"ginger" , sugar:2}
]

const app = () => {
  return (
    <div>
      <ChaiList 
      items={menu}
      />
      <Cups/>
    </div>
  )
}

export default app
