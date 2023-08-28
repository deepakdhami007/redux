// Import the Redux library
const redux = require('redux');

// Reducer function
const counterReducer = (state = { counter: 0 }, action) => {
    return {
        counter: state.counter + 1
    };
};

// Create the Redux store
const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment'});
