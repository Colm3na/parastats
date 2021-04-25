import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Footer, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
