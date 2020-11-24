// const app = new PIXI.Application({ backgroundColor: 0x1099bb });
// document.body.appendChild(app.view);

// // Scale mode for all textures, will retain pixelation
// PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

// const sprite = PIXI.Sprite.from('static/css/covid-19_model.jpg');

// // Set the initial position
// sprite.anchor.set(0.5);
// sprite.x = app.screen.width / 2;
// sprite.y = app.screen.height / 2;

// // Opt-in to interactivity
// sprite.interactive = true;

// // Shows hand cursor
// sprite.buttonMode = true;

// // Pointers normalize touch and mouse
// sprite.on('pointerdown', onClick);

// // Alternatively, use the mouse & touch events:
// // sprite.on('click', onClick); // mouse-only
// // sprite.on('tap', onClick); // touch-only

// app.stage.addChild(sprite);

// function onClick() {
//     sprite.scale.x *= 1.25;
//     sprite.scale.y *= 1.25;
// }



var card = document.querySelector(".card");
var playing = false;

card.addEventListener("click", function () {
    if (playing) return;

    playing = true;
    anime({
        targets: card,
        scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
        rotateY: { value: "+=180", delay: 200 },
        easing: "easeInOutSine",
        duration: 400,
        complete: function () {
            playing = false;
        }
    });
});
