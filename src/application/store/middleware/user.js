
const test = ({ log }) => ({ dispatch }) => next => action => {
    next(action);
    log("test")
}

export default [
    test
]