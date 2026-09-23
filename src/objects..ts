type chai={
    flav:string;
    sugar:number
}
const placeOrder=(order:Partial<chai>)=>{
    console.log(order);

}
placeOrder({flav:"adrak"});