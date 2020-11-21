const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

// Scale mode for all textures, will retain pixelation
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const sprite = PIXI.Sprite.from('static/css/covid-19_model.jpg');

// Set the initial position
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

// Opt-in to interactivity
sprite.interactive = true;

// Shows hand cursor
sprite.buttonMode = true;

// Pointers normalize touch and mouse
sprite.on('pointerdown', onClick);

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

app.stage.addChild(sprite);

function onClick() {
    sprite.scale.x *= 1.25;
    sprite.scale.y *= 1.25;
}


// const app = new PIXI.Application({ backgroundColor: 0x1099bb });
// document.body.appendChild(app.view);

// // Css style for icons
// const defaultIcon = "url('static/css/covid-19_model.jpg'),auto";
// const hoverIcon = "url('static/css/covid-19_model.jpg'),auto";

// // Add custom cursor styles
// app.renderer.plugins.interaction.cursorStyles.default = defaultIcon;
// app.renderer.plugins.interaction.cursorStyles.hover = hoverIcon;

// // create a background...
// const background = PIXI.Sprite.from('static/css/Covid-19_inside.jpg');
// background.width = app.screen.width;
// background.height = app.screen.height;
// // add background to stage...
// app.stage.addChild(background);

// // create some textures from an image path
// const textureButton = PIXI.Texture.from('static/css/Covid-19_inside.jpg');
// // const textureButtonDown = PIXI.Texture.from('static/css/Covid-19_inside.jpg');
// // const textureButtonOver = PIXI.Texture.from('static/css/Covid-19_inside.jpg');

// const buttons = [];

// // const buttonPositions = [
// //     175, 75,
// //     655, 75,
// //     410, 325,
// //     150, 465,
// //     685, 445,
// // ];

// for (let i = 0; i < 5; i++) {
//     const button = new PIXI.Sprite(textureButton);
//     button.cursor = 'hover';

//     // button.anchor.set(0.5);
//     // button.x = buttonPositions[i * 2];
//     // button.y = buttonPositions[i * 2 + 1];

//     // make the button interactive...
//     button.interactive = true;

//     button
//         // Mouse & touch events are normalized into
//         // the pointer* events for handling different
//         // button events.
//         // .on('pointerdown', onButtonDown)
//         // .on('pointerup', onButtonUp)
//         // .on('pointerupoutside', onButtonUp)
//         // .on('pointerover', onButtonOver)
//         // .on('pointerout', onButtonOut);

//     // Use mouse-only events
//     // .on('mousedown', onButtonDown)
//     // .on('mouseup', onButtonUp)
//     // .on('mouseupoutside', onButtonUp)
//     // .on('mouseover', onButtonOver)
//     // .on('mouseout', onButtonOut)

//     // Use touch-only events
//     .on('touchstart', onButtonDown)
//     .on('touchend', onButtonUp)
//     .on('touchendoutside', onButtonUp)

//     // add it to the stage
//     app.stage.addChild(button);

//     // add button to array
//     buttons.push(button);
// }

// // set some silly values...
// buttons[0].scale.set(1.2);
// buttons[2].rotation = Math.PI / 10;
// buttons[3].scale.set(0.8);
// buttons[4].scale.set(0.8, 1.2);
// buttons[4].rotation = Math.PI;

// function onButtonDown() {
//     this.isdown = true;
//     this.texture = textureButtonDown;
//     this.alpha = 1;
// }

// function onButtonUp() {
//     this.isdown = false;
//     if (this.isOver) {
//         this.texture = textureButtonOver;
//     } else {
//         this.texture = textureButton;
//     }
// }

// function onButtonOver() {
//     this.isOver = true;
//     if (this.isdown) {
//         return;
//     }
//     this.texture = textureButtonOver;
// }

// function onButtonOut() {
//     this.isOver = false;
//     if (this.isdown) {
//         return;
//     }
//     this.texture = textureButton;
// }
