class Player {
    constructor() {

    }

    getCount() {
        var countref = database.ref("playerCount")
        countref.on("value", function(data) {
            playerCount = data.val()
            console.log(data)
        })
    }
    updateCount(count) {
        database.ref('/').update 
        ({
            playerCount : count 
        })
    }
    update(name) {
        var playerindex = "player" + playerCount
        database.ref(playerindex).set
        ({
            playername : name
        })
    }
}