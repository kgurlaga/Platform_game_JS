const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');

const img_idle = new Image();
img_idle.src = 'assets/idle.png';

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
        drawUI()
    }
});

canvas.addEventListener('mousemove', function (evt) {

    let game_rect = canvas.getBoundingClientRect()
    cursor.x = evt.clientX - game_rect.left;
    cursor.y = evt.clientY - game_rect.top;

    if (cursor.x >= 1030 && cursor.x <= 1150 && cursor.y >= 730 && cursor.y <= 780)
        canvas.style.cursor = 'pointer';
    else canvas.style.cursor = 'default';
});

function drawUI() {
    
    ctx.font = "42px Arial";
    ctx.fillStyle = "#FFD38D";
    ctx.fillText("Liczba dziesiętna do przedstawienia binarnego: " + number_dec, 30, 770);
    
    ctx.fillStyle = "brown"
    ctx.fillRect(1030, 730, 120, 50);
    ctx.font = "28px Arial";
    ctx.fillStyle = "#FFD38D";
    ctx.fillText("ZMIEŃ", 1045, 765);
}

class Character { 
    constructor({ img, pos }) {
        this.img = img;
        this.pos = pos;
        this.frame = 0;
        this.maxframes = 10;
        this.state = 'idle';
    }

    draw() {
        ctx.drawImage(this.img, this.frame * 165, 0, 165, 200, this.pos.x, this.pos.y, 165, 200);
        if (this.frame < this.maxframes) this.frame++;
        else this.frame = 0;
        
    }
}

const racoon = new Character({
    img: img_idle,
    pos: {
        x: 500,
        y: 485
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawUI();
    racoon.draw();

    requestAnimationFrame(animate);
}

animate();
