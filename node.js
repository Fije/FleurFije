import '@material/mwc-button'; // bare module specifier
const catfactlist = document.getElementById("catfactlist");
const button = document.querySelector('#myButton');
button.addEventListener('click', () => {
  alert('You clicked!');
});
fetch("https://cat-fact.herokuapp.com/facts").then((response) => {
    console.log(response);
      response.json().then((result) => { 
        console.log(result);
        result.all.forEach((catfact) => {
            const catfactElem = document.createElement("li");
            catfactElem.innerText = catfact.text;
            catfactlist.appendChild(catfactElem);
        });
    });
   
});
