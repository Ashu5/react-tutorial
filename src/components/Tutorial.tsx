function Tutorial(){
  
    // arrray 

    let games=["Cricekt","Hockey","Badminton","Tennis"]
    console.log("Arrays==>",games)
    //insert at the end of the array

    games.push("Squash");
    console.log("Array Push===>",games)

    // array of an object

    let user={
        name:"Max",
        age:15,
        address:"NY"
    }
    console.log("Object--->",user)

    //deconstructing the object
  const {username,gender,city}={
        username:"Max",
        gender:"Male",
        city:"NY"
    };
    console.log("User Object Deconstructed==>",username)
    console.log("User Object Deconstructed==>",gender)
    console.log("User Object Deconstructed==>",city)


    // array of an object

    const names=[
    {
        name:"Ash",
        id:12,
        city:"NJ"

    },
{

    name:"John",
    id:22,
    city:"NJ"
},
{

    name:"Peter",
    id:23,
    city:"NPHJ"
}];
console.log("Array of objects===>",names)


// spread operator -- merges one type into another of same type

const cars=["BMW","Mercedes Benz","VW"];
const indianCars=["Tata","Mahindra","Maruti Suzuki"]

const carsInIndia=[...cars,...indianCars];

console.log("Cars in india using spred operator==>",carsInIndia)
return<>

<div>This is tutorial page.</div>

</>
}


export default Tutorial