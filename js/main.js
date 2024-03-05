import {
    getAdjectives
} from "./data.js";

let adjectives;
let sortDirection = "up";

function init() {

}

function addSortEvents() {

}

function addVoteEvents() {

}

function sort() {

}

function render() {

}

function upVote(target) {

}


function downVote(target) {

}

function updateScore(word, scoreChange) {
    const foundIndex = adjectives.findIndex(function (item, index) {
        if (item.word == word) {
            return true
        }
    });

    if (foundIndex != null) {
        let newScore = adjectives[foundIndex]['score'] + scoreChange;
        adjectives[foundIndex]['score'] = Math.round(newScore * 100) / 100;
    }
}

init();