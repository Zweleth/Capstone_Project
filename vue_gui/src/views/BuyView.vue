<template lang="">
  <perfumes></perfumes>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import perfumes from "@/components/Perfumes.vue";
export default {
  components: {
    perfumes,
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
