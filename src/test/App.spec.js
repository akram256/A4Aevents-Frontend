import { mount, createLocalVue } from '@vue/test-utils'
import App from '../App.vue'

describe('tests for App.vue', () => {
  test('App has an h1', () => {
    const vue = createLocalVue()
    const app = mount(App, { vue })
    expect(app).toContains('h1')
  })
})
