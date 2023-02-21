import { PAGE_LOADED, SET_LOADING_OFF, SET_LOADING_ON } from "../actions/ui";

const pageLoadedFlow = ({ log }) => ({ dispatch }) => next => action => {
    next(action);

    if (action.type === PAGE_LOADED) {
        log('page loaded');
    }
}


const switchPageLoadingFlow = ({ log }) => ({ dispatch }) => next => action => {
    next(action);


    if (action.type === SET_LOADING_OFF || action.type === SET_LOADING_ON) {
        log('switching loading state to ' + action.payload);
    }
}

export default [
    pageLoadedFlow,
    switchPageLoadingFlow
]