import Phaser from 'phaser'

import WurmVsMole from './scenes/WurmVsMole'
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
			debug: false,
		}
	},
	render: {
		pixelArt: true,
	},
	scene: [WurmVsMole]
}

export default new Phaser.Game(config)
