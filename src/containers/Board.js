import React, { Component } from 'react';
import Square from '../components/Square'

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boardLayout: [
                null, null, null,
                null, null, null,
                null, null, null
            ],
            nextCharacter: 'X'
        }
        this.handleSquareClick = this.handleSquareClick.bind(this);
        this.alternateCharacters = this.alternateCharacters.bind(this);
        this.updateBoardLayout = this.updateBoardLayout.bind(this);
        this.checkWin = this.checkWin.bind(this);
    }

    checkWin() {
        const winningConditions = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 5, 9],
            [3, 5, 7],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
        ]

        let someoneHasWon = false;

        for (const winningCondition of winningConditions) {
            
            let ourBoardValues = [];
            for (const position of winningCondition) {
                if (this.state.boardLayout[position - 1] === null) {
                    return
                } else {
                    const characterToCompare = this.state.boardLayout[winningCondition[0]];
                if (characterToCompare === this.state.boardLayout[position - 1]) {
                    someoneHasWon = true;
                } else {
                    someoneHasWon = false;
                }
                }
                

                // ourBoardValues.push(positionValue)
            }
            console.log(someoneHasWon);
            
        }
        
    }

    alternateCharacters() {
        if (this.state.nextCharacter === 'X') {
            this.setState({ nextCharacter: 'O' })
        } else {
            this.setState({ nextCharacter: 'X' })
        }
    }

    updateBoardLayout(index) {
        const newBoardLayout = this.state.boardLayout;
        if (newBoardLayout[index] === null) {
            newBoardLayout[index] = this.state.nextCharacter;
            this.setState({ boardLayout: newBoardLayout });
            this.alternateCharacters();
        }
    }

    handleSquareClick(index) {
        this.updateBoardLayout(index);
        this.checkWin();
    }

    render() {

        const squareNodes = this.state.boardLayout.map((square, index) => {
            return <Square key={index} id={index} onSquareClick={this.handleSquareClick} />
        })

        return (
            <div>
                {squareNodes}
            </div>
        )
    }

}

export default Board;