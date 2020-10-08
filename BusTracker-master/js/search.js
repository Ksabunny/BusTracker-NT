"use strict";

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//Search route.json and filter it
const searchRoute = async searchText => {
    const res = await fetch('../route_json/routes.json');
    const routes = await res.json();
    //get matches to current text input

    let matches = routes.filter(rt => {
        const regex = new RegExp('(\\w*'+searchText+'\\w*)','gi');
        return rt.name.match(regex);
    });

    if(searchText.length === 0)
    {
        matches = [];
        matchList.innerHTML = "";
    }
    
    outputHtml(matches);
}

//show results 
const outputHtml = matches => {
    if(matches.length > 0){
        const html = matches.map(match => `
            <div class="card card-body mb-1" id="temp">
                <a href=${match.href}><h5>${match.name}</h5></a>
                <p>${match.day}</p>
            </div>
        `).join('');

        matchList.innerHTML = html;
    }
}

search.addEventListener('input', () => searchRoute(search.value));

const marker = document.getElementById('marker');

marker.addEventListener('click', function() {
    var txt = document.getElementById("marker").innerHTML;
    console.log("clicked " + txt); 
    if(txt != "X"){
        document.getElementById("marker").innerHTML = "X";
        document.querySelector(".aside").classList.add("open");
    }
    else{
        document.getElementById("marker").innerHTML = '&#9776;';
        document.querySelector(".aside").classList.remove("open");
    }
});