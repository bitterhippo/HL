const API = {
  getOne: function (state) {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('https://swapi.dev/api/people/1/', requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .catch(err => console.log('Error', err))
  },
  getTen: function (state) {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('https://swapi.dev/api/people/1/', requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .catch(err => console.log('Error', err))
  }
}

export default API;