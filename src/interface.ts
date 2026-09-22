type chai={
    sugar:number,
    size:number,    
}
class chaiorder implements chai{
    sugar=2 
    size=3
}
interface Chaiflav{ 
    size:"masala"|"ginger"
}
class flavour implements Chaiflav{
    size:"masala"|"ginger"="masala";
}

