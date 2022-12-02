
import axios from 'axios'

export default {
    getAllStates() {
        // Return list of state objects
        return axios.get('/api/states').then(response => {
            return response.data
        })
    },
    setVisited(stateName, visited) {
        // Update the visited value based off checkbox in StateDetail
        let requestData = {visited: visited}
        return axios.patch('/api/states/' + stateName, requestData)
        .then(response => {
            return response.data
        })
    },
    getOneState(stateName) {
        // Get data on one state
        return axios.get('/api/state/' + stateName).then(response => {
            return response.data
        })
    },
    getVisitedStates() {
        // Return all states where visited = true
        return axios.get('/api/states', {
            params: {
                "visited": true
            }
        }).then(response => {
            return response.data
        })
    }
}

