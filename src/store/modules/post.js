import axios from 'axios'

const state = {
  posts: []
}

const getters = {
  totalPost: state => {
    return state.posts.length
  }
}

const actions = {
  async getPost ({ commit }, data) {
    await axios.get('https://jsonplaceholder.typicode.com/posts ', data).then((responsive) => {
      commit('setpost', responsive.data)
    })
  },
  updatePost ({commit}, updpost) {
    commit('update', updpost)
    console.log(updpost)
  },
  deletePost ({commit}, post) {
    commit('delete', post)
  }
}

const mutations = {
  setpost (state, data) {
    state.posts = data
  },
  update (state, updpost) {
    const index = state.posts.findIndex(post => post.id === updpost.id)
    if (index !== -1) {
      state.posts.splice(index, 1, updpost)
    }
  },
  delete (state, post) {
    state.posts.splice(state.posts.indexOf(post), 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
