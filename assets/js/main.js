var DEFAULT_PARAMETERS = {
    PLAYER_ONE: 'p1',
    PLAYER_TWO: 'p2',
    CLASS_PLAYER_ONE: 'withPiecePlayerOne',
    CLASS_PLAYER_TWO: 'withPiecePlayerTwo'
}

var myViewModel = {
    numberOfRows: ko.observableArray([0, 1, 2, 3, 4, 5, 6, 7]),
    numberOfCols: ko.observableArray([0, 1, 2, 3, 4, 5, 6, 7]),
    positionsPlayerOne: ko.observableArray([
        { 'piece': { 'position': 0, 'alive': true } },
        { 'piece': { 'position': 2, 'alive': true } },
        { 'piece': { 'position': 4, 'alive': true } },
        { 'piece': { 'position': 6, 'alive': true } },
        { 'piece': { 'position': 9, 'alive': true } },
        { 'piece': { 'position': 11, 'alive': true } },
        { 'piece': { 'position': 13, 'alive': true } },
        { 'piece': { 'position': 15, 'alive': true } },
        { 'piece': { 'position': 16, 'alive': true } },
        { 'piece': { 'position': 18, 'alive': true } },
        { 'piece': { 'position': 20, 'alive': true } },
        { 'piece': { 'position': 22, 'alive': true } }
    ]),
    positionsPlayerTwo: ko.observableArray([
        { 'piece': { 'position': 41, 'alive': true } },
        { 'piece': { 'position': 43, 'alive': true } },
        { 'piece': { 'position': 45, 'alive': true } },
        { 'piece': { 'position': 47, 'alive': true } },
        { 'piece': { 'position': 48, 'alive': true } },
        { 'piece': { 'position': 50, 'alive': true } },
        { 'piece': { 'position': 52, 'alive': true } },
        { 'piece': { 'position': 54, 'alive': true } },
        { 'piece': { 'position': 57, 'alive': true } },
        { 'piece': { 'position': 59, 'alive': true } },
        { 'piece': { 'position': 61, 'alive': true } },
        { 'piece': { 'position': 63, 'alive': true } }
    ]),
    returnCurrentPosition: function (positionRow, positionCol) {
        if (positionRow == 0) {
            return positionRow + positionCol;
        } else {
            return positionRow * 8 + positionCol;
        }
    },
    returnPlayerPosition: function (positionRow, positionCol) {
        var currentPosition = this.returnCurrentPosition(positionRow, positionCol);

        if (this.checkPlayerSelected(currentPosition) == DEFAULT_PARAMETERS.PLAYER_ONE) {
            return DEFAULT_PARAMETERS.CLASS_PLAYER_ONE
        } else if (this.checkPlayerSelected(currentPosition) == DEFAULT_PARAMETERS.PLAYER_TWO) {
            return DEFAULT_PARAMETERS.CLASS_PLAYER_TWO;
        }

        return false;
    },
    checkPlayerSelected: function (currentPosition) {
        for (var i = 0; i < this.positionsPlayerOne().length; i++) {
            if (currentPosition == this.positionsPlayerOne()[i].piece.position) {
                return DEFAULT_PARAMETERS.PLAYER_ONE;
            }
        }
        for (var i = 0; i < this.positionsPlayerTwo().length; i++) {
            if (currentPosition == this.positionsPlayerTwo()[i].piece.position) {
                return DEFAULT_PARAMETERS.PLAYER_TWO;
            }
        }
        return false;
    },
    checkNewPosition: function (parent, positionRow, positionCol, data) {
        var currentPosition = this.returnCurrentPosition(positionRow, positionCol);
        var playerSelected = this.checkPlayerSelected(currentPosition);
        if (playerSelected == 'p1' || playerSelected == 'p2') {
            console.log("Existe")
        } else {
            console.log("Não existe")
        }
    }
}

ko.applyBindings(myViewModel);