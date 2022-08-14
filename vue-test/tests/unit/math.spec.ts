import { shallowMount } from '@vue/test-utils'
import Math from '@/components/Math.vue'

describe('Math.vue', () => {
  it('checks if 6 + 2 = 8', () => {
    const wrapper = shallowMount(Math)
    expect(wrapper.vm.adding(6, 2)).toBe(8)
  })

  it('checks if 6 * 2 = 12', () => {
    const wrapper = shallowMount(Math)
    expect(wrapper.vm.multiplying(6, 2)).toBe(12)
  })

  it('checks if 6 - 2 = 4', () => {
    const wrapper = shallowMount(Math)
    expect(wrapper.vm.substracting(6, 2)).toBe(4)
  })

  it('checks if 6 / 2 = 3', () => {
    const wrapper = shallowMount(Math)
    expect(wrapper.vm.dividing(6, 2)).toBe(3)
  })
})
