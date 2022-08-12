import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it("answers 'Is it a Hello?' if you ask a question", () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.vm.hello('How are you?')).toBe('Is it a Hello?')
  })

  it("answers 'Finish Hello' if you won't finish", () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.vm.hello('Say...')).toBe('Finish Hello')
  })

  it("answers 'It's a Hello!' when there is exclamation", () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.vm.hello('Hello!')).toBe("It's a Hello!")
  })

  it("shows 'Empty' if there is nothing.' ", () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.vm.hello('')).toBe('Empty')
  })

  it("answers 'Hello World' to anything else", () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.vm.hello('asdasdasd')).toBe('Hello World')
  })
})
