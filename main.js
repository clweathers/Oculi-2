let oculus;
let tile;

let columns;
let rows;

function setup() {
    create_oculus();
    create_tile();
    createCanvas(windowWidth, windowHeight);
    canvas_updated();
}

function draw() {
    background(235, 223, 195);

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            let x = column * tile.width;
            let y = row * tile.height;

            push();

            translate(x + (tile.width / 2), y + (tile.height / 2));
            rotate((PI / 2) * (row + column));
            imageMode(CENTER);
            image(tile, 0, 0);

            pop();
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    canvas_updated();
}

function canvas_updated() {
    columns = windowWidth / oculus.width;
    rows = windowHeight / oculus.height;
}

function create_oculus() {
    let oculus_size = 158;

    let x0 = 0;
    let x1 = 50;
    let x2 = 56;
    let x3 = 80;
    let x4 = 158;
    
    let y0 = 0;
    let y1 = 30;
    let y2 = 100;
    let y3 = 158;

    let rectangles = createGraphics(oculus_size, oculus_size);

    rectangles.rectMode(CORNERS);
    rectangles.noStroke();

    rectangles.fill(233, 158, 126);
    rectangles.rect(x0, y0, x1, y2);

    rectangles.fill(233, 194, 168);
    rectangles.rect(x0, y2, x1, y3);

    rectangles.fill(231, 243, 4);
    rectangles.rect(x1, y0, x2, y3);

    rectangles.fill(114, 160, 142);
    rectangles.rect(x2, y0, x3, y2);

    rectangles.fill(174, 214, 187);
    rectangles.rect(x2, y2, x4, y3);

    rectangles.fill(221, 164, 108);
    rectangles.rect(x3, y0, x4, y1);

    rectangles.fill(224, 195, 62);
    rectangles.rect(x3, y1, x4, y2);

    let mask = createGraphics(oculus_size, oculus_size);
    mask.ellipseMode(CORNER);
    mask.ellipse(0, 0, oculus_size);

    oculus = rectangles.get();
    oculus.mask(mask);
}

function create_tile() {
    let tile_padding = 5;
    let tile_width = oculus.width + tile_padding * 2;
    let tile_height = oculus.height + tile_padding * 2;

    tile = createGraphics(tile_width, tile_height);
    tile.image(oculus, tile_padding, tile_padding);
}
