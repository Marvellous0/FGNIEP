export const PAGE_LOADED = 'page loaded';
export const SET_LOADING_ON = 'set loading on';
export const SET_LOADING_OFF = 'set loading off';

export const pageLoaded = {
    type: PAGE_LOADED
};

export const setLoading = isLoading => ({
    type: isLoading ? SET_LOADING_ON : SET_LOADING_OFF,
    payload: isLoading,
});