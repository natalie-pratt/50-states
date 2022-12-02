<template>
    <div>
        <h2>You have visited:</h2>
        <div id="visited-states-list" v-for="state in visitedStates" v-bind:key="state">
            <p>{{state.name}}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'StatesVisited',
    data() {
        return {
            visitedStates: []
        }
    },
    mounted() {
        this.fetchVisitedStates()
    },
    methods: {
        fetchVisitedStates() {
            this.$stateService.getVisitedStates().then(states => {
                this.visitedStates = states
            })
        }
    }
}

</script>
