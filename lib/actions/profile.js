export const GET_PROFILE = 'GET_PROFILE'
export const getProfile = props => ({type: GET_PROFILE,payload: props})

export const GET_TABLE = 'GET_TABLE'
export const getTable = props => ({type: GET_TABLE,payload: props})

export const ADD_PROFILE_DETAIL = 'ADD_PROFILE_DETAIL'
export const addProfileDetail = props => ({type: ADD_PROFILE_DETAIL,payload: props})

export const ADD_PROFILE_IMAGE = 'ADD_PROFILE_IMAGE'
export const addProfileImage = image => ({type: ADD_PROFILE_IMAGE,payload: image})
