<template>
    <div>
        <h1 id="not-found-msg">404 - Not Found</h1>

        <div>
            <img id="not-found-img" src="~@/assets/404-image.png">
        </div>

        <router-link id="home" to="/">Go to Home Page?</router-link>

        <p class="citation">Image by 
            <a class="citation" href="https://pixabay.com/users/ralfdesign-2031934/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4584554">
                Ralf Designs</a> from <a class="citation" href="https://pixabay.com/">Pixabay</a></p>

    </div>
</template>

<script>

export default {
    name: 'NotFound'
}

</script>

<style scoped>

 div {
    background-color: rgb(92, 138, 138);
    width: 100%;
    height: 100%;
    margin: 0, 0, 0, 0;
    padding-top: 40px;
    padding-bottom: 100px;
    position: relative;
}

#not-found-msg {
    margin-top: 20;
    margin-bottom: 0;
    font-size: 80px;
    color: white;
}

#home {
    font-size: 35px;
    color: white;
}

#not-found-img {
    height: 200px;
    width: auto;
    margin-left: center;
    margin-bottom: 0;
    margin-top: 0px;
}

.citation {
    margin-bottom: 0;
    color: white;
}

</style>