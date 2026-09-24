type Cardrop={
    name:String
    sugar:number
}
export const Card = ({name, sugar}:Cardrop) => {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{sugar}</h2>
    </div>
  )
}


