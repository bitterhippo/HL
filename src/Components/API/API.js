const API = {
  getOne: function (state) {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(`https://swapi.dev/api/people/${this.getRN()}/`, requestOptions)
      .then(response => response.text())
      .then(result => state(JSON.parse(result)))
      .catch(err => console.log('Error', err))
  },
  getTen: function (state) {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    let queryValues = [];

    while (queryValues.length <= 10) {
      let newRN = this.getRN()
      queryValues.includes(newRN) ? null : queryValues.push(newRN);
    }

    let queryResults = [];

    queryValues.forEach(cv => fetch(`https://swapi.dev/api/people/${cv}/`, requestOptions)
      .then(response => response.text())
      .then(result => queryResults.push(JSON.parse(result)))
      .catch(err => console.log('Error', err)))

    console.log(queryResults);
  },
  getRN: function () {
    return Math.floor(Math.random() * (83 - 1) + 1)
  }
}

export default API;