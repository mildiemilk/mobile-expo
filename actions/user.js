

export const setUserName = detail => ({  type: 'SET_USER_NAME', payload: detail})

export const setUserAvatar = (user) => {
  const profileImage = 'https://graph.facebook.com/'+ user.providerData[0].uid +'/picture?access_token='+ user.refreshToken
  return {
  type: 'SET_USER_AVATAR',
  avatar: profileImage ? profileImage : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png'
}}

