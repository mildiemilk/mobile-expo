export const SAVE_SHARED_USER = 'SAVE_SHARED_USER'
export const saveSharedUser = (sharedUserUid) => ({
	type: SAVE_SHARED_USER,
	payload: sharedUserUid
})