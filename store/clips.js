export const state = () => ({
  list: [
    { key: '1', type: 'text', context: '入力した文字を右のボタンからコピーできます\nこのページを離れても入力した文字は残ります' },
    { key: '2', type: 'text', context: '下の「新しいメモ」から新しい文字を追加できます' },
  ],
  // list: []
})
export const getters = {
  list: state => state.list,
}
export const mutations = {
  // insertClip: function (state, { type, clip, index }) {
  //   if (index) {
  //     state.list.splice(index, 0, { key, type, clip })
  //   } else {
  //     list.push({ key, type, clip })
  //   }
  // },
  createClip: function (state) {
    state.list.push({ key: crypto.randomUUID(), type: 'text', context: '' })
  },
  editClip: function (state, { event, key }) {
    state.list.find(clip => clip.key === key).context = event
  },
  deleteClip: function (state, key) {
    state.list = state.list.filter(clip => {
      return clip.key !== key
    })
  }
}
export const actions = {
  createClip: function ({ commit }) {
    commit('createClip')
  },
  editClip: function ({ commit }, { event, key }) {
    commit('editClip', { event, key })
  },
  deleteClip: function ({ commit }, key) {
    commit('deleteClip', key)
  },
}
