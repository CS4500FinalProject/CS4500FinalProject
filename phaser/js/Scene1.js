//Purpose Makes scene that animates traversal of binary tree
// "this." refers to this Scene/Level

class Scene1 extends Phaser.Scene {
    constructor () {
        // call superclass (Phaser.Scene) constructor.
        super({key:"Scene1"});
    }
    init(data) {}
    preload () {
        //the directory is relative to the index.html file or whichever html
        //file that Scene1 is loaded from
        var imageDir = "./assets/images/";
        this.load.image("cave",imageDir+"cave.png");
        this.load.image("person",imageDir+"person.png");
    }
    create ()  {
        //Make list of images
        var nodeList = [];

        //This is hard coded
        //TODO make this dynamic
        var nodePositionArray = [
                              [370,30],
                              [310,130],
                              [430,130],
                              [250,230],
                              [370,230],
                              [490,230]
                             ];
        this.CaveImageArray = [];

        //elements such as enemies or obstacles are stored as groups
        https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Group.html
        var caveGroup = this.add.group();
        //create a series of caves in the node positions
        for (var i = 0; i < nodePositionArray.length; i++) {
            caveGroup.create(
                nodePositionArray[i][0],
                nodePositionArray[i][1],
                'cave');
        }

        var player = this.add.sprite(0, 0, 'person');
        //a tween is an animation of a sprite moving between 2 positons a
        //Timeline is a series of tweens
        var playerAnimationTimeline = this.tweens.createTimeline();

        //animate it moving from one node to another
        for (var i = 0; i < nodePositionArray.length; i++) {
            var tweenBuilderConfig = {
                targets: player,
                duration: 1000,
                x : nodePositionArray[i][0],
                y : nodePositionArray[i][1]
            };
            playerAnimationTimeline.add(tweenBuilderConfig);
        }

        //run all tween animations
        playerAnimationTimeline.play();

    }
    update(time, delta) {}
 

}
