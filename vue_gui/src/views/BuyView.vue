<template lang="">
  <perfumes></perfumes>
  <spinner></spinner>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import spinner from '@/components/Spinner.vue'
import perfumes from "@/components/Perfumes.vue";
export default {
  components: {
    perfumes,
    spinner
  },
  computed: {
    ...mapGetters(["vehicles", "vehicle"]),
  },
  methods: {
    ...mapActions(["fetchVehicles", "fetchVehicle"]),
  },
  created() {
    this.fetchVehicles();
    this.fetchVehicle();
  },
};
</script>
<style scoped>
.buy {
  width: 100vw;
  height: 100vh;
}
</style>
