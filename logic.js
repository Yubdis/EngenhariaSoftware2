// Define variables
const blueBox = document.querySelector("#blueBox")
const redBox = document.querySelector("#redBox")
const possibleButton = document.getElementById("possible")
const impossibleButton = document.getElementById("impossible")

// Define the initial state
const initialState = {
    state: 'possible' // Initial state
  };

// Create a class for the state context
  class StateContext {
    constructor() {
      this.state = initialState;
    }

    // Method to change the state
    changeState(newState) {
      this.state = { ...this.state, state: newState };
      console.log('State changed to ', this.state)
    }

    // Method to handle box click
    handleBoxClick() {
      if (this.state.state === 'possible') {
        console.log('Box clicked!');

      }
    }

    // Method to handle box hover
    handleBlueBoxHover() {
      if (this.state.state === 'impossible') {
        // Hide the box
        blueBox.classList.add('hidden');
      }
    }
    handleRedBoxHover() {
      if (this.state.state === 'impossible') {
        // Hide the box
        redBox.classList.add('hidden');
      }
    }
    handleBlueBoxMouseOut() {
      blueBox.classList.remove('hidden');
    }
    handleRedBoxMouseOut() {
      redBox.classList.remove('hidden');
    }
  }

  // Initialize the state context
  const stateContext = new StateContext();


  blueBox.addEventListener('mouseover', () => stateContext.handleBlueBoxHover());
  blueBox.addEventListener('mouseout', () => stateContext.handleBlueBoxMouseOut());
  blueBox.addEventListener('click', () => stateContext.handleBoxClick());

  redBox.addEventListener('mouseover', () => stateContext.handleRedBoxHover());
  redBox.addEventListener('mouseout', () => stateContext.handleRedBoxMouseOut());
  redBox.addEventListener('click', () => stateContext.handleBoxClick());

  possibleButton.addEventListener('click', () => stateContext.changeState('possible'));
  impossibleButton.addEventListener('click', () => stateContext.changeState('impossible'));



