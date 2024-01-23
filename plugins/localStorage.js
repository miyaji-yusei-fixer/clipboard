import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => [
  createPersistedState({
    key: 'clips',
    paths: ['clips'],
    storage: window.localStorage
  })(store),
]
