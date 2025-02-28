let numberInput = document.querySelector('#numberInput');

numberInput.addEventListener ("input", function () 
{
    let valRecvd = Number(numberInput.value);
    
    if(valRecvd <= -10 || valRecvd >= 10) 
        {
            alert("The number should be b/w -10 & 10");
        }

});

let Fruit =
{
    name: "Apple",
    color: "Red",
    taste: "Sweet",

}

let nameElement = document.querySelector("#fruitName");
let colorElement = document.querySelector("#fruitColor");
let tasteElement = document.querySelector("#fruitTaste");


nameElement.innerHTML = `Name: ${Fruit.name}`;
colorElement.innerHTML = `Color: ${Fruit.color}`;
tasteElement.innerHTML = `Taste: ${Fruit.taste}`;
