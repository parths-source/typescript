import { Card } from "./Card";

import type {Cardrop} from "./Card"

interface ChaiListProp{
    items: Cardrop[];
}

export const ChaiList = ({items}:ChaiListProp) => {
  return (
    <div>
        <h1>CHAI LIST</h1>
        {items.map((chai)=>(
            <Card
            name={chai.name}
            sugar={chai.sugar}
            />
        ))}
        
    </div>
  )
}

