const initialState = {
  name: null,
  userUid: null,
  avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png',
  authorizing: false,
  authorized: false
};

const user = (state = initialState, action) => {
    console.log('action-->', action.payload)
  switch (action.type) {
      case 'SET_USER_NAME':
      console.log('SET_USER_NAME-->', action.payload)
          return Object.assign({}, state, {
              name: action.payload.displayName,
              userUid: action.payload.uid
          });
      case 'SET_USER_AVATAR':
          return Object.assign({}, state, {
              avatar: action.avatar
          });
      case 'USER_START_AUTHORIZING':
          return Object.assign({}, state, {
              authorizing: true
          });
      case 'USER_AUTHORIZED':
          return Object.assign({}, state, {
              authorizing: false,
              authorized: true
          });
      case 'USER_NO_EXIST':
          return Object.assign({}, state, {
              authorizing: false,
              authorized: false
          });

      default:
          return state
  }
}

export default user;
