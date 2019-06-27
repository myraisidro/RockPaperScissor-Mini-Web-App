document.getElementById('play').addEventListener('click', ()=>{
    const getVal = document.getElementById('name').value;

    let getVals;

    if (localStorage.getItem('Name') === null) {
        getVals = [];
    } else {
        getVals = JSON.parse(localStorage.getItem('Name'));
    }

    getVals.push(getVal);

    localStorage.setItem('Name',JSON.stringify(getVals));

    getVals.forEach(function(getVal){
    console.log(getVal);
    });
});

// clear localstorage
const play = document.getElementById('play');
play.addEventListener('click', letStart);
function letStart(){
    localStorage.clear();
}