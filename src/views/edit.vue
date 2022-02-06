<template>
  <div id="edit">
    <div id="card">
  <h1> Change role</h1>
  <div>
  <p>Select user level access</p>

  <div>
  <input type="radio" id="0" v-model="role" name="role" value="Admin"> <label for="0">
  <span><b>Admin</b> </span> 
  </label><br>
  </div>

  <div>
  <input type="radio" id="1" v-model="role" name="role" value="Support">
  <label for="1"><span><b> Support</b> </span> </label><br>
  </div>

  <div>
  <input type="radio" id="2" v-model="role" name="role" value="Analyst">
  <label for="2"><span><b> Analyst</b> </span>  </label>
  </div>
   <input type="submit" id="updatebutton" value="Update" @click='update'>
  <input type="button" id="cancel" value="Cancel" @click="cancel">
  </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

#edit{
  padding-top: 40px;
    padding-left: 200px;
}

#card{
  background-color: lavender;
  width: 80%;
  height: 300px;
h1{
  padding-top: 20px;
}
}

#updatebutton, #cancel {
  background-color: #8F00FF;
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font:bold;
  margin: 4px 2px;
  border-radius: 8px;
  cursor: pointer;
  float: center;
  }

</style>



<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class edit extends Vue {
  role = '';
  @Prop({ required: true })
  name!: string;
  index!: number;
  members = []
  mounted() {
    this.members = this.$store.getters.getAllMembers;
  }

  computed() {
    this.members = this.$store.getters.getAllMembers;
  }
  
  cancel() {
        this.$router.push('/');
      }
  
  update() {
      //alert(this.name);
      this.$store.commit('updateRole', this.role );
      this.$router.push('/');
      }

  
}
</script>
