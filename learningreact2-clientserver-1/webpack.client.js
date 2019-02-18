const path = require("path");
//const resolve = require('resolve');

module.exports = {
    mode  : "development",
    entry : "./client/client.js",
    output : {
        filename : "bundle.js",
        path : path.resolve(__dirname,"global")
    },
    module : {
        rules :[
            {
                test : /\.js?$/,
                loader : require.resolve('babel-loader'),
                exclude : '/node_modules/',
                options : {
                    babelrc: false,
                    presets : [
                        
                        //'stage-0',
                       // "module:@babel/plugin-proposal-function-bind",
                        [
                            "@babel/env",
                            {
                                targets : {
                                    browsers: ['last 2 versions']
                                }
                            }
                        ],
                        "@babel/react"
                    ]
                }
            }
        ]
    } 
};