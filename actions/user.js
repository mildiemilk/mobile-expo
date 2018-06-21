

export const setUserName = detail => ({  type: 'SET_USER_NAME', payload: detail})

export const setUserAvatar = (avatar) => ({
  type: 'SET_USER_AVATAR',
  avatar: avatar && avatar.length > 0 ? avatar : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png'
});

