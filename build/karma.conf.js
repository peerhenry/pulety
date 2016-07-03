module.exports = function(config){
    config.set({
        basePath: '',
        broswerNoActivityTimeout: 100000,
        frameworks: ['mocha'],
        files: [
            'public/lib/**/*.js',
            'public/test/*.js'
        ],
        exclude: [

        ],
        preprocessors: {

        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['IE', 'Firefox', 'PhantomJS'],
        singleRun: false
    })
}