
let count = 0;



function increment() {
    count += 1;
    document.getElementById("count-el").textContent = count;
}

function decrement() {
    count -= 1;
    document.getElementById("count-el").textContent = count;
}


let SaveData = document.getElementById("saveData");


function save() {
    let _count = SaveData.textContent + count + " - ";
    SaveData.textContent =  _count;

    count = 0;
    document.getElementById("count-el").textContent= count;
}




