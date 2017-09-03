export const SET_PATH = 'SET_PATH';

export type Actions = {
    SET_PATH: {
        type: string;
        path: string;
    }
}

export const actionCreators = {
    setPath: (path: string): Actions['SET_PATH'] => ({
        type: SET_PATH,
        path
    })
};