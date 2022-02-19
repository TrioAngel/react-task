const GET_MORE_IMGS = 'GET-MORE-IMGS';
const GET_IMG = 'GET-IMG';
const FILTER_CATS_WITH_CATEGORIES = 'FILTER_CATS_WITH_CATEGORIES'

const initState = []

const hatsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_IMG:
            return action.imgs
        case GET_MORE_IMGS:
            return [...state, ...action.moreImgs]
        case FILTER_CATS_WITH_CATEGORIES:
            return action.imgs
        default:
            return state
    }
}

export const getImgActionCreator = (imgs) => ({ type: GET_IMG, imgs })
export const getMoreImgsActionCreator = (moreImgs) => ({type: GET_MORE_IMGS, moreImgs})
export const filterCatsWithCategories = (imgs) => ({type: FILTER_CATS_WITH_CATEGORIES, imgs})


export default hatsReducer;