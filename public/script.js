// *********** VARIABLE DECLARATIONS **************

// FROM DOCUMENT
// inputs
const state_input = document.getElementById("state_input")
const electoral_input = document.getElementById("electoral_input")
// buttons
const biden_win = document.getElementById("for_biden")
const trump_win = document.getElementById("for_trump")
const biden_lose = document.getElementById("from_biden")
const trump_lose = document.getElementById("from_trump")
const biden_win_trumps = document.getElementById("to_biden")
const trump_win_bidens = document.getElementById("from_trump")
// for appending
const options = document.getElementById("options")
const biden_total = document.getElementById("biden_total") // text content
const trump_total = document.getElementById("trump_total") // text content
const biden_states = document.getElementById("biden_states") // <li></li>
const trump_states = document.getElementById("trump_states") // <li></li>

// FOR JS
let biden_electorals = 0
let trump_electorals = 0
// the _states variables will be arrays of objects: { state: `${state_input.value}`, value: `${electoral_input.value}`, ... }
let trump_states_won = []
let biden_states_won = []

run()

function run() {
    setOptions()
    appendTotals(biden_total, biden_electorals)
    appendTotals(trump_total, trump_electorals)
    biden_states.innerHTML = `<li>No wins added yet</li>`
    trump_states.innerHTML = `<li>No wins added yet</li>`
}

// ************ FUNCTIONS **************


// HANDLE CLICKS
    // handle biden win click
    biden_win.addEventListener('click', () => {
        let newBidObj = big_var.find(element => element.state === options.value)
        if (biden_states_won.find(element => element.state === options.value) !== undefined) {
            alert("Biden already won that state.")
        } else {
            biden_states_won.push(newBidObj)
            biden_electorals += parseInt(newBidObj.value)
            biden_states_won.sort(compare)
            appendStates(biden_states, biden_states_won)
            appendTotals(biden_total, biden_electorals)
            win()
        }
    })

    // handle trump win click
    trump_win.addEventListener('click', () => {
        let newTrumpObj = big_var.find(element => element.state === options.value)
        if (trump_states_won.find(element => element.state === options.value) !== undefined) {
            alert("Trump already won that state.")
        } else {
            trump_states_won.push(newTrumpObj);
            trump_electorals += parseInt(newTrumpObj.value)
            trump_states_won.sort(compare)
            appendStates(trump_states, trump_states_won)
            appendTotals(trump_total, trump_electorals)
            win()
        }

    })

    // handle delete from biden click
    biden_lose.addEventListener('click', () => {
        let newBidObj = biden_states_won.find(element => element.state === options.value)
        let currentPosition = biden_states_won.indexOf(newBidObj)
        if (currentPosition === -1) { 
            alert("Biden didn't win that state")
        } else {
            biden_states_won.splice(currentPosition)
            biden_electorals -= parseInt(newBidObj.value)
            appendStates(biden_states, biden_states_won)
            appendTotals(biden_total, biden_electorals)
            win()
        }

    })
    // handle delete from trump click
    trump_lose.addEventListener('click', () => {
        let newTrumpObj = trump_states_won.find(element => element.state === options.value)
        let currentPosition = trump_states_won.indexOf(newTrumpObj)
        if (currentPosition === -1) { 
            alert("Trump didn't win that state")
        } else {
            trump_states_won.splice(currentPosition)
            trump_electorals -= parseInt(newTrumpObj.value)
            appendStates(trump_states, trump_states_won)
            appendTotals(trump_total, trump_electorals)
            win()
        }

    })

// HANDLE APPENDING

    // append win lines to code
    function appendStates (candidate_div, array) {
        let sorted = array.sort()
        candidate_div.innerHTML = ""
        for (i = 0; i < array.length; i++) {
            candidate_div.innerHTML += `<li><strong>${array[i].state}</strong>: ${array[i].value}</li>`
        }
    }
    
    // append total electoral votes to results
    function appendTotals (candidate_div, total) {
        candidate_div.innerHTML = `<strong>Current Electoral Count: </strong> ${total}`
    }

    // set to 
    function setOptions () {
        for (i = 0; i < big_var.length; i++) {
            options.innerHTML += `<option>${big_var[i].state}</option>`
        }
    }



// WIN 

    function win () {
        if (biden_electorals >= 270) {
            alert("BIDEN WINS 😬")
        } 
        else if (trump_electorals >= 270) {
            alert("FUCK!!!!!!!!")
        } else {
            return
        }
    }

// HANDLE SORT

    function compare (a, b) {
        const stateOne = a.state.toUpperCase()
        const stateTwo = b.state.toUpperCase()

        let comparison = 0
        if (stateOne > stateTwo) { 
            comparison = 1
        } else if (stateOne < stateTwo) {
            comparison = -1
        }
        return comparison
    } 