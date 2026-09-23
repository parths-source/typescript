interface order{
    start(count:number):void,
    stop(count:number):void
}
const counting:order={
    start(count:20){
        console.log(`start is ${count}`)
    },
    stop(count:30){
        console.log(`stopped at ${count}`)
    }
}
interface user{
    name:string
}
interface user{
    age:number
}
const details:user={
    age:20,
    name:"parth"
}
