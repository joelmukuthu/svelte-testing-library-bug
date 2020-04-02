const { render } = require ('@testing-library/svelte')
const Button = require('./button.svelte')

test('renders', () => {
  render(Button)
})
