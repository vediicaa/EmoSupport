import {
    COMMENT_LOADING,
    ADD_COMMENT,
    GET_COMMENTS,
    CLEAR_COMMENTS,
    REMOVE_TWEET,
    LIKE_TWEET
} from "actions/types";

const initialState = {
    comments: null,
    loading: false
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    const { comments } = state;

    switch(type) {
        case COMMENT_LOADING:
            return {
                ...state,
                loading: true
            };
        case ADD_COMMENT:
            return {
                ...state,
                comments: comments !== null ? [payload.data, ...comments] : null,
                loading: false
            };
        case GET_COMMENTS:
            return {
                ...state,
                comments: payload,
                loading: false
            };
        case CLEAR_COMMENTS:
            return {
                ...state,
                comments: null
            };
        case REMOVE_TWEET:
            return {
                ...state,
                comments: comments !== null
                    ? comments.filter(comment => comment._id !== payload)
                    : comments,
            };
        case LIKE_TWEET:
            const likeIndex = state.comments && state.comments.findIndex(comment => comment._id === payload.tweetId);

            return {
                ...state,
                comments: comments && likeIndex > -1 ? [
                    ...comments.slice(0, likeIndex),
                    {
                        ...comments[likeIndex],
                        likes: comments[likeIndex].likes.includes(payload.authUserId)
                            ? comments[likeIndex].likes.filter(id => id !== payload.authUserId)
                            : [...comments[likeIndex].likes, payload.authUserId]
                    },
                    ...comments.slice(likeIndex + 1)
                ] : comments,
            };
        default:
            return state;
    }
}