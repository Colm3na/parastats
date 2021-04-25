import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub,
        BContainer: true,
        BNavbar: true,
        BNavbarBrand: true,
        BNavbarToggle: true,
        BCollapse: true,
        BNavbarNav: true,
        BNavItem: true,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
