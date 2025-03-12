const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');

let number_dec = Math.floor(Math.random() * 255) + 1;

const cursor = {
    x: 0,
    y: 0
}

canvas.addEventListener('click', function (evt) {

    let game_rect = canvas.getBoundingClientRect()
    cursor.x = evt.clientX - game_rect.left;
    cursor.y = evt.clientY - game_rect.top;

    if (cursor.x >= 1030 && cursor.x <= 1150 && cursor.y >= 730 && cursor.y <= 780) {
        number_dec = Math.floor(Math.random() * 255) + 1;
        showUI()
    }

    console.log(cursor.x, cursor.y);
});

function showUI() {
    ctx.font = "42px Arial";
    ctx.fillStyle = "#FFD38D";
    ctx.fillText("Liczba dziesiętna do przedstawienia binarnego: " + number_dec, 30, 770);

    ctx.fillStyle = "brown"
    ctx.fillRect(1030, 730, 120, 50);
    ctx.font = "28px Arial";
    ctx.fillStyle = "#FFD38D";
    ctx.fillText("ZMIEŃ", 1045, 765);
}

showUI();