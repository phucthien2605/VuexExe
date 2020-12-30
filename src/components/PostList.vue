<template>
  <div>
    <h1>Có tất cả: {{totalPost}}</h1>
    <table class="table" >
      <tr>
        <th>UserId</th>
        <th>ID</th>
        <th>TITLE</th>
        <th>BODY</th>
        <th>ACTION</th>
      </tr>
      <tr v-for="(post, index) in posts" :key="index">
        <td>{{post.userId}}</td>
        <td>{{post.id}}</td>
        <td><input class="form-control" type="text" v-model="post.title"></td>
        <td><input class="form-control" type="text" v-model="post.body"></td>
        <td><button class="btn btn-primary" @click="update(post, index)" >UPDATE</button> <button class="btn btn-danger" @click="deletePost(post, index)">DELETE</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'postlist',
  data () {
    return {}
  },
  methods: {
    ...mapActions({
      deletePost: 'post/deletePost',
      updatePost: 'post/updatePost'
    }),
    update (post, index) {
      this.updpost = {
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body
      }
      this.updatePost(this.updpost)
    }
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts
    }),
    ...mapGetters({
      totalPost: 'post/totalPost'
    })
  },
  mounted () {
    this.$store.dispatch('post/getPost')
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
