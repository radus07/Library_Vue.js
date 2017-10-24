// import store from '../store'

export var myUserService = {
  getUser () {
    return new Promise((resolve, reject) => {
      // Do httpRequest and get user's details
      resolve({details: {id: 1, username: 'user'}})
    })
  }
}
