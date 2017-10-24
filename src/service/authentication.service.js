// import store from '../store'

const VALID_USER = {
  username: 'user',
  password: 'user'
}

export var authService = {
  checkAuthentication (user) {
    // Do httpRequest for checking if user with these credentials exists
    return new Promise((resolve, reject) => {
      if (user.username === VALID_USER.username && user.password === VALID_USER.password) {
        // Send back the response from server
        resolve({id: 1, username: 'user'})
      } else {
        reject(new Error('invalid username or password'))
      }
    })
  },
  loginUser (user) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('user', JSON.stringify(user))
      resolve()
    })
  }
}
