class Game {
    constructor() {

    }
    getState() {
        var countref = database.ref("gameState")
        countref.on("value", function(data) {
            gameState = data.val()
        })
    }
    updateState(state) {
        database.ref('/').update 
        ({
            gameState : state 
        })
    }
    start() {
        if(gameState == 0) {
            player = new Player();
            player.getCount()
            form = new Form();
            form.display();
        }
    }
}