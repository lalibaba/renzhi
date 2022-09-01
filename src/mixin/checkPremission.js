import store from '@/store'
export default {
  methods: {
    checkPermission(key) {
      // const points = store.state.user.userInfo.roles && store.state.user.userInfo.roles.points
      // return points.includes(key)

      const { userInfo } = store.state.user
      if (userInfo.roles.points && userInfo.roles.points.length) {
        return userInfo.roles.points.some(item => item === key)
      }
      return false
    }
  }
}
