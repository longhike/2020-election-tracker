// *********** VARIABLE DECLARATIONS **************

// FROM DOCUMENT
// inputs
const state_input = document.getElementById("state_input")
const electoral_input = document.getElementById("electoral_input")
// buttons
const biden_win = document.getElementById("to_biden")
const trump_win = document.getElementById("to_trump")
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
        biden_states_won.push(newBidObj)
        biden_electorals += parseInt(newBidObj.value)
        appendStates(biden_states, biden_states_won)
        appendTotals(biden_total, biden_electorals)
        win()
    })

    // handle trump win click
    trump_win.addEventListener('click', () => {
        let newTrumpObj = big_var.find(element => element.state === options.value)
        trump_states_won.push(newTrumpObj);
        trump_electorals += parseInt(newTrumpObj.value)
        appendStates(trump_states, trump_states_won)
        appendTotals(trump_total, trump_electorals)
        win()
    })

// HANDLE APPENDING

    // append win lines to code
    function appendStates (candidate_div, array) {
        candidate_div.innerHTML = ""
        for (i = 0; i < array.length; i++) {
            candidate_div.innerHTML += `<li><strong>${array[i].state}</strong>: ${array[i].value}</li>`
        }
    }
    
    // append total electoral votes to results
    function appendTotals (candidate_div, total) {
        candidate_div.innerHTML = `<strong>Current Electoral Count: </strong> ${total}`
    }

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
