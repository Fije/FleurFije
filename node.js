
const   catfactlist = document.getElementById("catfactlist")
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
