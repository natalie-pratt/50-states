
import axios from 'axios'

export default {
    getAllStates() {
        // Return list of state objects
        return axios.get('/api/states').then(response => {
            return response.data
        })
    },
    setVisited(stateName, visited) {
        let requestData = {visited: visited}
        return axios.patch('/api/states/' + stateName, requestData)
        .then(response => {
            return response.data
        })
    }
}

