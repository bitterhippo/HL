const API = {
  getOne: async function (state, loadingHandler, loading) {

    if (!loading) {

      loadingHandler(true);
      state([])

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(`https://swapi.dev/api/people/${this.getRN()}/`, requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .then(result => state(previousState => [...previousState, result]))
        .then(result => loadingHandler(false))
        .catch(err => console.log('Error', err))

    }
  },
  getTen: async function (state, loadingHandler, loading) {

    try {

      loadingHandler(true);
      state([])

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      let queryValues = [];

      while (queryValues.length < 10) {
        let newRN = this.getRN()
        queryValues.includes(newRN) ? null : queryValues.push(newRN);
      }

      console.log(queryValues)

      let queries = await queryValues.forEach(cv => fetch(`https://swapi.dev/api/people/${cv}/`, requestOptions)
      .then(response => response.text())
      .then(response => JSON.parse(response))
      .then(result => state(previousState => [...previousState, result])))

      //queryValues.forEach(cv => fetch(`https://swapi.dev/api/people/${cv}/`, requestOptions)
        //.then(response => response.text())
        //.then(result => JSON.parse(result))
        //.then(result => state(previousState => [...previousState, result]))
        //.then(result => loadingHandler(false))
        //.catch(err => console.log('Error', err)))

    } catch (error) {
      console.log(error)
    }
  },
  getRN: function () {
    return Math.floor(Math.random() * (82 - 0) + 1)
  }
}

export default API;