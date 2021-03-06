import {loadImage} from './loaders.js';
import SpriteSheet from './SpriteSheet.js';


export function loadBackgroundSprites() {
	return loadImage('/client/assets/tileset.png')
	.then(image => {
		const sprites = new SpriteSheet(image, 16, 16);
		sprites.defineTile('ground', 0, 0);
		sprites.defineTile('sky', 3, 23);
		return sprites;
	});
}

export function loadMarioSprite() {
	return loadImage('/client/assets/characters.gif')
	.then(image => {
		const sprites = new SpriteSheet(image, 16, 16);
		sprites.define('idle', 276, 44, 16, 16);
		sprites.define('run-1', 290, 44, 16, 16);
		sprites.define('run-2', 304, 43, 16, 16);
		sprites.define('run-3', 321, 44, 16, 16);
		return sprites;
	});
}

export function loadAbilities() {
	return loadImage('/client/assets/FireBall.gif')
	.then(image => {
		const sprites = new SpriteSheet(image, 8, 8);
		sprites.define('Fireball', 0, 0, 8, 8);
		return sprites;
	});
}

export function loadExplosion() {
	return loadImage('/client/assets/explosions.png')
	.then(image => {
		const sprites = new SpriteSheet(image, 16, 16);
		sprites.define('Explosion', 208, 0, 16, 16);
		return sprites;
	});
}

export function loadHearts() {
	return loadImage('/client/assets/heart.png')
	.then(image => {
		const sprites = new SpriteSheet(image, 16, 16);
		sprites.define('Heart', 0, 0, 16, 16);
		return sprites;
	});
}