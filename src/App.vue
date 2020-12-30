<template>
  <div class="container" id="app">
    <h1>POST MANAGEMENT</h1>
    <PostList/>
  </div>
</template>

<script>
import PostList from './components/PostList'
export default {
  name: 'App',
  components: {
    PostList
  }
}
</script>

<style>

</style>
