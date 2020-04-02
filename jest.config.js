module.exports = {
  transform: {
    '\\.svelte$': 'svelte-jester'
  },
  moduleFileExtensions: [
    'js',
    'svelte'
  ],
  resolver: 'jest-svelte-resolver',
  transformIgnorePatterns: [
    'node_modules/(?!fa-svelte)'
  ],
}
