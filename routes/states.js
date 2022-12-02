
let express = require('express')
let States = require('../models').States

let router = express.Router()

// Create new router
router.get('/states', function(req, res, next) {
    // Find all states, order by name
    States.findAll({order: ['name']}).then(states => {
        return res.json(states)
    })
    .catch(err => next(err)) // Any errors found, let error handler deal with them
})

// Returns all info on one state
router.get('/state/:name', function(req, res, name) {
    let stateName = req.params.name
    States.findOne({where: {name: stateName}})
        .then(state => {
            if (state) {
                return res.json(state)
            } else {
                return res.status(404).send('State not found')
            }
        })
        .catch(err => next(err))
})

// Update database to change value of 'visited' checkbox
router.patch('/states/:name', function(req, res, next) {
    let stateName = req.params.name
    let stateVisited = req.body.visited

    // Update visited value where state name equals name requested
    States.update({visited: stateVisited}, {where: {name: stateName}})
         .then(rowsUpdated => {
            let numberOfRowsUpdated = rowsUpdated[0] // Determine whethere any rows were updated
            if (numberOfRowsUpdated == 1) {
                return res.send('Success')
            }
            return res.status(404).send('State not found') // If no rows updated, alert user
        })
        .catch(err => next(err)) // Any server errors will be passed to error handler
})

// Get all states where visited = true
router.get('/states/visited', function(req, res, next) {
    States.findAll({where: {visited: true}})
        .then(visitedStates => {
            return res.json(visitedStates)
    })        
    .catch(err => next(err))

})

module.exports = router