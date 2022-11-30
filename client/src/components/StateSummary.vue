<template>
    <div>
        <div>
            <p>There are a total of {{states.length}} states including the District of Columbia</p>
        </div>

        <!-- Show this message if all states and Washington DC have been visited -->
        <div v-if="areAllVisited">
            <p id="all-visited-msg">You have visited all the states and Washington D.C.!</p>
        </div>

        <!-- Else, let user know how many of the states they've visited -->
        <div v-else>
        <!-- Check whether state should be plural -->
        <div v-if="totalVisited === 1">
            <p>You have visited {{totalVisited}} state</p>
        </div>

        <div v-else>
            <p>You have visited {{totalVisited}} states</p>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'StateSummary',
    props: {
        states: Array
    },
    computed: {
        totalVisited() {
            let visitedCount = 0
            this.states.forEach(state => {
                if (state.visited) {
                    visitedCount++
                }
            })
            return visitedCount
        },
        areAllVisited() {
            return this.totalVisited === this.states.length
        }
    }
}

</script>

<style scoped>

#all-visited-msg {
    font-weight: 600;
    color: rgb(103, 170, 103);
}


</style>
