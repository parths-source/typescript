function oderchai(size:"medium"|"large"|number){
    if(size==="medium") return `medium cutting chai`
    if(size=="large") return `extra chai`
    return `chai of size#${size}`
}
let order=9;
console.log(oderchai(order));

function serve(msg?:string):string{
    if(msg){
        return `serve chai acc to ${msg}`
    }
    return`serving deafult masala chai`
}
console.log(serve())

//creating you own classes like pair and triplets
type ChaiOrder={
    flav:string;
    sugar:number;
}
function serving(menu:ChaiOrder){
    return `serving your ${menu.flav} with ${menu.sugar} sugar`
}
const item={
    flav:"elacihi chai",
    sugar:1
}
console.log(serving(item));