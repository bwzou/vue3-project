<template>
  <img alt="Vue logo" src="./assets/logo.png" />
<!--  <HelloWorld msg="Hello Vue 3.0 + Vite" />-->
    <big-file></big-file>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BigFile from './views/performance/BigFile.vue'

export default {
  name: 'App',
  components: {
      BigFile
  }
}
</script>
