module.exports = {
 parserOptions: {
  parser: 'babel-eslint'
 },
 extends: [
  'plugin:vue/recommended',
  'standard'
 ],
 rules: {
  'no-new': 0
 },
 plugins: [
  'vue'
 ],
 env: {
  browser: true,
  node: true,
  mocha: true
 },
 globals: {
  expect: true
 }
}
