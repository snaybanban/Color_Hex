document.getElementById('color').addEventListener('input', getcolor)

function getcolor(){
    let col = document.getElementById('color').value 

    document.getElementById('visualizar').style.background=col
    document.getElementById('visualizar').innerHTML=col
}