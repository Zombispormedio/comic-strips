function isProd() {
    return process.env.NODE_ENV == 'production'
}

function isDev() {
        return !isProd || process.env.NODE_ENV == 'development'
    }

module.exports = {
    isProd, isDev
}