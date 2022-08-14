import { shallowMount } from '@vue/test-utils'
import FetchUsers, { BASE_URL } from '@/components/FetchUsers.vue'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

describe('fetchUsers', () => {
  let mock = new MockAdapter(axios)

  beforeAll(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  describe('when API call is successful', () => {
    it('should return users list', async () => {
      const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Andrew' }
      ]
      mock.onGet(`${BASE_URL}/users`).reply(200, users)

      const wrapper = shallowMount(FetchUsers)
      const result = await wrapper.vm.fetchUsers()

      expect(mock.history.get[0].url).toEqual(`${BASE_URL}/users`)
      expect(result).toEqual(users)
    })
  })

  describe('when API call fails', () => {
    it('should return empty users list', async () => {
      mock.onGet(`${BASE_URL}/users`).networkErrorOnce()

      const wrapper = shallowMount(FetchUsers)
      const result = await wrapper.vm.fetchUsers()

      expect(mock.history.get[0].url).toEqual(`${BASE_URL}/users`)
      expect(result).toEqual([])
    })
  })
})
