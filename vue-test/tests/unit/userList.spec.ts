import UserList, { totalUsers } from '@/components/UserList.vue'
import { shallowMount } from '@vue/test-utils'

describe('userList', () => {
  it('returns zero when there are no users', () => {
    const subject = shallowMount(UserList)
    expect(subject.totalUsers).toBe(0)
  })

  it('returns count of total users', () => {
    const subject = new UserList([
      { email: 'email@email.com' },
      { email: 'test@test.com' }
    ])

    expect(subject.totalUsers).toBe(2)
  })
})
