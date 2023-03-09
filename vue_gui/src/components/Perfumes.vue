<template lang="">
  <div class="perf_list">
    <div class="perf" v-for="perfume in perfumes" :key="perfume">
      <h6>{{perfume.perfume_name}}</h6>
      <div class="image" :style="{backgroundImage: `url(${perfume.image_url})`}"></div>
      <button class="more">View more</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "perfumes",
  computed: {
    ...mapGetters(["perfumes", "perfume"]),
  },
  methods: {
    ...mapActions(["fetchPerfumes", "fetchPerfume"]),
    ...mapMutations(["setPerfumes"]),
  },
  created() {
    this.fetchPerfumes();
    this.fetchPerfume();
  },
  data() {
    // return {
    //     perfume_name: 'Perfume_name',
    //     price:'Price',
    //     description: 'Description',
    //     gender: 'Gender',
    //     image_url: 'Image_url'
    // }
  },
};
</script>
<style scoped>
.perf_list {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
}

.perf {
    padding: 5rem 0 0 2rem;
  min-width: calc(100vw/3);
  background-color: var(--tone-three);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.image {
    width: 25rem;
    height: 25rem;
    background-position: center;
    background-size: cover;
}
.more{
    background: none;
    border:none;
    border: 0.1rem solid;
    width: 6rem;
    height: 2rem;
    border-radius: 0.22rem;
}
.perf h6 {
    font-size: larger;
    padding-bottom: 1rem;
}
</style>
