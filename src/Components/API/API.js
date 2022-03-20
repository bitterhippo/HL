const API = {
  getOne: async function (state, loadingHandler, loading) {

    if (!loading) {

      loadingHandler(true);
      state([])

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      await fetch(`https://swapi.dev/api/people/${this.getRN()}/`, requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .then(result => state(previousState => [...previousState, result]))
        .finally(loadingHandler(false))



    }
  },
  getTen: async function (state, loadingHandler, loading) {

    if (!loading) {
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

        let returnedQueries = [];

        for (let i = 0; i < queryValues.length; i++) {
          let request = await fetch(`https://swapi.dev/api/people/${queryValues[i]}/`)
          .then(result => result.text())
          .then(result => JSON.parse(result))
          .then(result => returnedQueries.push(result))
        }

        state([...returnedQueries])

        loadingHandler(false)

      } catch (error) {
        console.log(error)
      }
    }


  },
  getRN: function () {
    return Math.floor(Math.random() * (82 - 0) + 1)
  }
}

export default API;