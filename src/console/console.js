const axios = require('axios')
const port = process.env.APPLICATION_PORT;
const baseUrl = `http://kubernetes.docker.internal:${port}`

setInterval(() => {
  axios
    .get(`${baseUrl}/ping?from=Console`)
    .then((response) => {
      const json = response.data;
      console.log(`[${new Date().toISOString()}] [FROM: ${json.from ?? "(N/A)"}] Response: ${JSON.stringify(json)}`)
    })
    .catch(function (error) {
      console.log(error);
    })
}, 5000)