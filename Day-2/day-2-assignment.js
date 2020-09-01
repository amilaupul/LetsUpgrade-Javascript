//Question 1
//Program to search for a particular character in a string

let name = "amila upul kumara";

let output = name.indexOf("u");
console.log(output);


//Question 2
//Program to convert minutes to seconds

let minutes = 12;
console.log(`${minutes*60} seconds`);


//Question 3
//Program to search for a element in a array of strings

let cities = ["Hambantota","Galle","Colombo","Kandy","Mutur"];
console.log(cities[2]);


//Question 4
//Program to display only elements containing 'a' in them from a array

cities.forEach(ele=>{
    let out = "";
    out = ele.indexOf("a");

    if(out >= 0){
        console.log(ele);    
    }
});

//Question 5
//Print an array in reverse order

const cities_reverse = cities.reverse();
console.log(cities_reverse);
