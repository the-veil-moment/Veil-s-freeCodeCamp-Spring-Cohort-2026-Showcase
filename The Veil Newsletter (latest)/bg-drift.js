    document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'https://files.catbox.moe/70m44u.avif';
    let offsetX = 0;   
    let offsetY = 0;   
    let angle = 0;     
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    img.onload = () => {
        const tileW = img.width + 100; 
        const tileH = img.height + 100; 
        function draw() {
        angle += 0.005;
        offsetX = Math.sin(angle) * 20;
        offsetY = Math.cos(angle) * 20;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const cols = Math.ceil(canvas.width / tileW) + 2;
        const rows = Math.ceil(canvas.height / tileH) + 2;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
            const x = col * tileW + (offsetX % tileW) - tileW;
            const y = row * tileH + (offsetY % tileH) - tileH;
            const flipH = col % 2 === 1;
            const flipV = row % 2 === 1;
            ctx.save();
            ctx.translate(
                x + (flipH ? tileW : 0),
                y + (flipV ? tileH : 0)
            );
            ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
            ctx.drawImage(img, 0, 0, tileW, tileH);
            ctx.restore();
            }
        }
        requestAnimationFrame(draw);
        }
        draw();
    };
    });