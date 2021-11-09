<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @submit-data="submitData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm";
import BaseCard from "../../components/ui/BaseCard";
export default {
  name: "CoachRegistration",
  components:{
    BaseCard,
    CoachForm
  },
  methods:{
    submitData(data){
      this.$store.dispatch('coaches/addCoach', data);
      this.$router.replace('/coaches');
    }
  }
}
</script>

<style scoped>

</style>