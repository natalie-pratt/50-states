<template>
    <div>
        <h2>States you have visited:</h2>
        <div v-for="state in visitedStates" v-bind:key="state">
            <p class="visited-states-list">{{state.name}}</p>
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

<style scoped>

.visited-states-list {
    color: darkcyan;
    font-weight: 500;
    font-size: 1.2rem;
}

</style>
