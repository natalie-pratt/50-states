<template>
    <div id="block-header">
        <h1 id="title">How many states have you visited?</h1>
    </div>
</template>

<script>

export default {
    name: "PageHeader",
}

</script>

<style scoped>

    #block-header {
        padding: 2rem 1rem;
        margin-bottom: 2rem;
        border-radius: .3rem;
        background-color: saddlebrown;
        background-image: url('~@/assets/PageHeaderImage.jpg');
        background-position: center;
        background-size: cover;
        text-align: center;
    }

    #title {
        font-weight: 500;
        color: ghostwhite;
    }

</style>
