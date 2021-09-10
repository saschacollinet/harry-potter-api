const url = "http://hp-api.herokuapp.com/api/characters";
 
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        displayData(data);
    });
 
function displayData(data) {
    let charInfo = document.getElementById("display-info");
    data.forEach((character) => {
        let charName = document.createElement("p");
        charName.innerHTML = character.name;
        charInfo.appendChild(charName);
    })
}