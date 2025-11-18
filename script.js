





const err = document.getElementById("error");
const btn = document.getElementById("sisa");


async function getD () {
try{

const response = await fetch("https://jsonplaceholder.typicode.com/wrongEndpoint");


if (!response.ok){

          throw new Error(`HTTP error ${response.status}`)

}

const data = await response.json();
console.log(data);
return


}

catch (error) {

console.error(error);

err.innerText="se churretio'"

}


}
 


async function susa() {

const data = await getD();
if (!data) return


}

btn.addEventListener('click', susa);



