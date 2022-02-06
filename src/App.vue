<template>
  <div id="app">
    <div id="nav">
      <div id="smtg2">
      <h2><router-link to="/">Team Members</router-link></h2>
      </div>
      <div id="smtg">
      <router-link to="/invite">
      <input type="button" class="button" value="Invite Member"></router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

.button{
  background-color: #8F00FF;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 8px;
  cursor: pointer;
  float: right;
  }

#nav {
  padding: 40px;

  a {
    font-weight: bold;
    color: #2c3e50;
    //padding-left: 100px;
  }

  #smtg2{
    float: left;
    padding-left: 500px;
  }

  #smtg{
    padding-top: 0px;
    padding-right: 200px;
    float: right;
  }
}

</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export default class HelloWorld extends Vue {
  members = []
  mounted() {
    this.members = this.$store.getters.getAllMembers;
  }
  computed() {
    this.members = this.$store.getters.getAllMembers;
  }
}

</script>
