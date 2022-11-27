const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        // Address for API calls
        proxy: 'http://127.0.0.1:3000'
    }
})