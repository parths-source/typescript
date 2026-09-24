//array of objects
type chai={
    flav:String;
    rating:number
}
const order:chai[]=[
    {flav:"elaichi" , rating:23},
    {flav:"elaichi" , rating:23}
]
//tuples
const items:[name:String ,age:number]=["parth",22];

//enum
enum size{ 
    Large,
    small,
    medium
}
 // enum with keys
enum flav{
    MASALA="masala",
    GINGER="ginger"

}
function makechai(type:flav){
    console.log(`making %${makechai}`)
}
makechai(flav.GINGER);k