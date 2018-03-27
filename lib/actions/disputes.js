export const GET_ALL_DISPUTES = 'GET_ALL_DISPUTES'
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE'

export const getAllDisputeAction = disputes => ({type: GET_ALL_DISPUTES, payload: disputes})
export const updateStatus = index => ({type: UPDATE_STATUS, payload: index})
export const uploadImage = payload => ({type: UPLOAD_IMAGE, payload})
