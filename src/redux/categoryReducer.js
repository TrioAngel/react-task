const GET_CATEGORIES = 'GET-CATEGORIES';

const initState = []

const hatsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return [...action.categories]
        default:
            return state
    }
}

export const getCategoriesActionCreator = (categories) => ({ type: GET_CATEGORIES, categories })

export default hatsReducer;