module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
	rules: {
	  // allow async-await
	  'generator-star-spacing': 'off',
	  'indent': 'off',
	  'semi': 'off',
	  'no-trailing-spaces': 'off',
	  'comma-dangle': 'off',
	  'space-before-function-paren': 'off',
	  // allow debugger during development
	  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	}
}