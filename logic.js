// Define variables
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
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
    handleBoxHover() {
      if (this.state.state === 'impossible') {
        // Hide the box
        document.querySelector('.box').style.display = 'none';
      }
    }
  }
  
  // Initialize the state context
  const stateContext = new StateContext();


  box1.addEventListener('click', () => stateContext.handleBoxClick());
  box1.addEventListener('mouseover', () => stateContext.handleBoxHover());
  
  box2.addEventListener('click', () => stateContext.handleBoxClick());
  box2.addEventListener('mouseover', () => stateContext.handleBoxHover());
  
  possibleButton.addEventListener('click', () => stateContext.changeState('possible'));
  impossibleButton.addEventListener('click', () => stateContext.changeState('impossible'));
  


