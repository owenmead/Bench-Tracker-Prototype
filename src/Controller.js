// Probably want to replace this with redux.
// For now this basic event listener will work

var listenerFunctions = [];

var Controller = {
  subscribe: callbackFn => {
    listenerFunctions.push(callbackFn)
  },
  broadcast: (evntName, evntData) => {
    listenerFunctions.forEach(fn => fn(evntName, evntData))
  }
}

export default Controller