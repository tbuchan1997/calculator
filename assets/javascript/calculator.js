function display(value){
    document.getElementById("result").value += value;
}

function clearScreen(){
    document.getElementById("result").value = "";
}

function solve(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
    return y;
}