import { NearestFilter, TextureLoader ,RepeatWrapping} from 'three'


import {
	dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
} from './images'

const dirtTexture = new TextureLoader().load(dirtImg)
const groundTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const grassTexture = new TextureLoader().load(grassImg)
const woodTexture  = new TextureLoader().load(woodImg)
const logTexture   = new TextureLoader().load(logImg)

dirtTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;

groundTexture.magFilter = NearestFilter
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping


export {
    dirtTexture,
    groundTexture,
    glassTexture,
    woodTexture,
    logTexture,
    grassTexture
}