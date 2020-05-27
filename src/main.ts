import Phaser from 'phaser'

//import HelloWorldScene from './scenes/HelloWorldScene'
//import WurmLevel from './scenes/WurmLevel'
import AalLevel from './scenes/AalLevel'
import WurmLevel from './scenes/WurmLevel'
import Menu from './scenes/menu'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 1500,
	height: 700,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 400 },
			debug: true,
		}
	},
	scene: [AalLevel]
}

export default new Phaser.Game(config)
