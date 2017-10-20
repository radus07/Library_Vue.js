export default {
  isLogged: (localStorage.getItem('user') !== null),
  getUser () {
    return new Promise((resolve, reject) => {
      if (this.isLogged) {
        // Do httpRequest adn get user's details
        resolve({isLogged: this.isLogged, details: {id: 1, username: 'user'}})
      } else {
        // return isLogged
        resolve({isLogged: this.isLogged})
      }
    })
  }
}
