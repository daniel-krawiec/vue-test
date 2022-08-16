<template>
  <div class="userList"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  data () {
    return {
      users: []
    }
  },
  computed: {
    allUsers () {
      return this.users
    },
    totalUsers () {
      return this.users.length
    }
  },
  methods: {
    add (user: { email: string; id: number }) {
      if (!user.email) throw new Error('no email')

      user.id = this.allUsers.length + 1
      this.users = [...this.allUsers, user]

      return user
    },
    random () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.totalUsers > 0) {
            const randomNumber = Math.floor(Math.random() * this.totalUsers)
            resolve(this.allUsers[randomNumber])
          } else {
            reject(new Error())
          }
        }, 100)
      })
    }
  }
})
export default class UserList extends Vue {}
</script>

<style scoped lang="scss">
</style>
