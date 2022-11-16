let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");


function init() {
    render_units();
    render_Vertical_Lines();
    render_Horizontal_Lines();
    render_X_Axis();
    render_Y_Axis();
    render_tick_Marks();
    init_sinus();
}




function render_units() {
    for (let i = 5; i <= 605; i = i + 6) {
        //vertical lines
        ctx.moveTo(i, 5);
        ctx.lineTo(i, 605);
        //horizontal lines
        ctx.moveTo(5, i);
        ctx.lineTo(605, i);

        ctx.strokeStyle = '#f0f0f0';
        ctx.stroke();
    }
    ctx.beginPath();
}


function render_Horizontal_Lines() {
    for (let j = 5; j <= 605; j = j + 30) {
        ctx.moveTo(5, j);
        ctx.lineTo(605, j);
        ctx.stroke();
        ctx.strokeStyle = '#c0c0c0';
    }
    ctx.beginPath();
}


function render_Vertical_Lines() {
    for (let j = 5; j <= 605; j = j + 30) {
        ctx.moveTo(j, 5);
        ctx.lineTo(j, 605);
        ctx.stroke();
        ctx.strokeStyle = '#c0c0c0';
    }
    ctx.beginPath();
}


function render_X_Axis() {
    ctx.moveTo(5, 305);
    ctx.lineTo(605, 305);
}


function render_Y_Axis() {
    ctx.moveTo(95, 5);
    ctx.lineTo(95, 605);
}


function render_tick_Marks() {
    for (let k = 5; k <= 900; k = k + 30) {
        ctx.fillStyle = "green";
        render_X_Numbers(k);
        render_Y_Numbers(k);
    }
}


function render_X_Numbers(k) {
    ctx.moveTo(k, 302);
    ctx.lineTo(k, 307);
    ctx.fillText(((k - 5) / 30) - 10, k - 214, 315);
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
}


function render_Y_Numbers(k) {
    ctx.moveTo(92, k);
    ctx.lineTo(97, k);
    ctx.fillText(-((k - 5) / 30) + 10, 97, k + 3);
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();

}