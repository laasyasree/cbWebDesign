<template>
  <div id="invite">
    <div id="card">
  <h1> 
         <br>Invite a team member to use Chargebee
    </h1>
  <h5>
You can either let your team members access everything in this site,or assign specific roles to them
  </h5>
  <label> <b>Name</b> </label>
  <br>
  <textarea v-model="name"> </textarea>
  <br>
  <label><b>Email</b> </label>
  <br>
<textarea v-model="mail">
  sample@chargebee.com
  </textarea>
  <div>
  <p><b>Select user level access</b></p>

  <div>
  <input type="radio" id="0" v-model="role" name="role" value="Admin"> <label for="0">
  <span><b>Admin</b> </span>
  </label><br>
  </div>

  <div>
  <input type="radio" id="1" v-model="role" name="role" value="Support">
  <label for="1"><span><b> Support</b> </span></label><br>
  </div>

  <div>
  <input type="radio" id="2" v-model="role" name="role" value="Analyst">
  <label for="2"><span> <b>Analyst</b> </span>  </label>
  </div>
  <br>
   <input type="submit" id="invitebutton" value="Invite Member" @click='addMember'>
  <input type="button" id="cancel" value="Cancel" @click="cancel">
  </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

#invite{
  padding-top: 40px;
    padding-left: 200px;
}

#invitebutton, #cancel {
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


#card{
  background-color: lavender;
  width: 80%;
  height: 500px;
  
h1{
  padding-top: 0px;
}
}
</style>


<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      name: '',
      role: '',
      mail: '',
    };
  },
  methods: {
    addMember() {
      this.$store.commit('setNewMember', { name: this.name, role: this.role, mail: this.mail });
      this.$router.push('/');
    },
    cancel() {
      this.$router.push('/');
    },
  },
})
export default class InviteMembers extends Vue {}
</script>
