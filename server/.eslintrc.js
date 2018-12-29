module.exports = {
  "extends": ["airbnb-base"],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "script",
    "ecmaFeatures": {
      "impliedStrict": true,
    }
  },
  "env": {
    "node": true,
    "browser": true,
    "jest": true
  },
  "plugins": [
    "html"
  ],
  "rules": {
    "linebreak-style": [2 ,"unix"],
    "semi": [2, 'never'],
    "max-len": [0,{ "code": 200 }],
    "object-curly-newline": 0,
    "global-require":0,
    "no-unused-vars": [1, { "args": "none" }],
    "no-shadow": [2, { "allow": ["err","error"] }],
    "no-lone-blocks": 0,
    "no-plusplus":0,
    "no-param-reassign": 0,
  }
}