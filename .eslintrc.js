module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "env": {
        "node": true,
        "es6": true
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "no-console": 1,
        "no-unused-vars": 1,
        "react/prop-types": 0 
    }
}
