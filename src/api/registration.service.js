export var registrationService = {
  registerUser (user) {
    // Do httpRequest for inserting user in db
    return new Promise((resolve, reject) => {
      let response = true
      // If response is good send status ok
      if (response) resolve(true)
      // If response is bad send error
      else reject(new Error('An error occurred'))
    })
  }
}
