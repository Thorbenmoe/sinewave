let x = 95;
let y = 305;




function init_sinus() {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(605, y);

}


//calculation for the Sinuscurve
function render_sinus() {
    volt = document.getElementById("voltage").value;
    alert(volt);
    ctx.beginPath();
    ctx.moveTo(x, y);

    for (x; x <= 605; x++) {
        //calculation
        ctx.lineTo(x, y + Math.sin(x * 0.015) * 100);
        ctx.strokeStyle = "blue";
        ctx.stroke();
    }

}