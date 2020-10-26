import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import candleImg from "./assets/candle.png";
import GameScene from './scenes/GameScene';
import VictoryLap from './scenes/VictoryLap';

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  physics:{
    default: ninja,
    ninja:{
      debug:true
    }
  }
};

let game = new Phaser.Game(config);
game.scene.add('GameScene', GameScene);
game.scene.add('VictoryLap', VictoryLap);

function preload ()
{
    this.load.image('logo', logoImg);
}

function create ()
{
    image = this.add.image(400, 300, 'logo');

    text = this.add.text(32, 32);
    timedEvent = this.time.delayedCall(2000, onEvent, [], this);
}

function update ()
{
    text.setText('Event.progress: ' + timedEvent.getProgress());
}

function onEvent ()
{
    image.rotation += 0.1;
}