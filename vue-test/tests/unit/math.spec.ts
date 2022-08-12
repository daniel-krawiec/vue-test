import { shallowMount } from '@vue/test-utils'
import Math from '@/components/Math.vue'

describe('Math.vue', () => {
  it('checks if 6 + 2 = 8', () => {
    const wrapper = shallowMount(Math)
    expect(wrapper.vm.adding(6, 2)).toBe(8)
  })
})
