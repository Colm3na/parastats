import { mount } from '@vue/test-utils'
import Countdown from '@/components/Countdown.vue'

describe('Countdown', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Countdown)
    expect(wrapper.vm).toBeTruthy()
  })
})
