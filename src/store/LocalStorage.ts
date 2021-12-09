const STATE_KEY = "state";
const defaultState = {};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(STATE_KEY);
        if (serializedState === null) {
            return defaultState;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return defaultState;
    }
};

export const saveState = (state: {}) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(STATE_KEY, serializedState);
    } catch(err) {
        console.error(err)
    }
};

export const cleanState = () => {
    try {
        localStorage.removeItem(STATE_KEY);
    } catch(err) {
        console.error(err)
    }
};

export const getAccessToken = () => {
    try {
        const serializedState = localStorage.getItem(STATE_KEY);
        if (serializedState === null) {
            return undefined;
        }
        const state = JSON.parse(serializedState);
        return (state.user || {}).access_token;
    } catch (err) {
        return undefined;
    }
};
