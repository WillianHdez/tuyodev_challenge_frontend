module.exports = {
    parserOptions: {
        project: './tsconfig.json'
    },
    ignorePatterns: [".eslintrc.cjs"],
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                "*.ts",
                "*.tsx"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off"
    }
}