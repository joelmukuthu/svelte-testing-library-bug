const { render } = require ('@testing-library/svelte')
const Button = require('./button.svelte')

test('shows an icon', () => {
  render(Button)
})
