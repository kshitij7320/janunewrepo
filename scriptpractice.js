// let age = 19;
// if(age >= 18) {
//     if(age >= 60){
//         console.log("You are an adult");
//     }
//     else{
//         console.log("You are an adult and not too old");
//     }
// }
// else{
//     console.log("You are a child");
// }
// for (let i = 0; i <= 50; i++){let str = "*";
//     for(let j = 0; j < 5; j++){
//         str += "* ";
//     }
//     console.log(str);
// }
const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/fart";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");



// const getfacts = async () => {
//     console.log("getting data...");
//     let response = await fetch(URL);
//     console.log(response,status);
//     let data = await response.json();
//     factpara.innerText = data[0].text;


// }
function getfacts(){
    fetch(URL)
   .then((response) => {
    return response.json();

   }).then((data) => {
    console.log(data);
    factpara.innerText = data[0].text;
   });
}


btn.addEventListener("click",getfacts);
