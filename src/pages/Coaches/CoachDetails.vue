<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink"></base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
      <p> {{ description }}</p>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "../../components/ui/BaseCard";
import BaseButton from "../../components/ui/BaseButton";
import BaseBadge from "../../components/ui/BaseBadge";
export default {
  name: "CoachDetails",
  components: {BaseBadge, BaseButton, BaseCard},
  props:['id']
}
</script>

<style scoped>

</style>