export const SET_PAGE = 'SET_PAGE';

export type Actions = {
    SET_PAGE: {
        type: string;
        mainPage: boolean;
    }
}

export const actionCreators = {
    setPage: (mainPage: boolean): Actions['SET_PAGE'] => ({
        type: SET_PAGE,
        mainPage
    })
};