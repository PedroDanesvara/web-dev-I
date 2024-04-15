state = 0

function changeImage(){
    if (state === 0) {
        document.getElementById("sofa").src = '..\\src\\sofa.gif';
        document.getElementById("visualization_button").src = '..\\src\\x.svg';
        state = 1
    } else {
        document.getElementById("visualization_button").src = '..\\src\\360.svg';
        document.getElementById("sofa").src = '..\\src\\sofa.png';
        state = 0
    }
}