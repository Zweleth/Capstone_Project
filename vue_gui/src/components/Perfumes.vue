<template lang="">
  <div class="perf_list" v-if="perfumes">
    <div
      class="perf"
      id=""
      v-for="perfume in perfumes"
      :key="perfume"
      :style="{
        backgroundColor: `${this.products[perfume.perfume_id - 1].bgColor}`,
      }"
    >
      <h6
        :style="{ color: `${this.products[perfume.perfume_id - 1].textColor}` }"
      >
        {{ perfume.perfume_name }}
      </h6>
      <div
        class="image"
        :style="{ backgroundImage: `url(${perfume.image_url})` }"
      ></div>
      <button
        class="more"
        :style="{ color: `${this.products[perfume.perfume_id - 1].textColor}` }"
        @mouseover="con()"
        @mouseleave="slide()"
        @click.prevent="viewMore(perfume)"
      >
        View more
      </button>
    </div>
    <div
      class="perf"
      v-for="perf in perfumes.slice(0, 3)"
      :key="perf"
      :style="{
        backgroundColor: `${this.products[perf.perfume_id - 1].bgColor}`,
      }"
    >
      <h6 :style="{ color: `${this.products[perf.perfume_id - 1].textColor}` }">
        {{ perf.perfume_name }}
      </h6>
      <div
        class="image"
        :style="{ backgroundImage: `url(${perf.image_url})` }"
      ></div>
      <button
        class="more"
        :style="{ color: `${this.products[perf.perfume_id - 1].textColor}` }"
        @click.prevent="viewMore(perfume)"
      >
        View more
      </button>
    </div>
    <div class="search_bar">
      <i class="fa-solid fa-arrow-up-z-a"></i
      ><i class="fa-solid fa-arrow-up-z-a"></i
      ><i class="fa-solid fa-filter"></i>
    </div>
    <div class="single_perfume" id="hideModal">
      <div class="perfume_info">
        <button class="btn_close" @click="closeModal()"><i class="fa-solid fa-xmark"></i></button>
        <h6 class="sinle_perf_name">{{ this.perfume_name }}</h6>
        <div
          class="image"
          :style="{ backgroundImage: `url(${this.image_url})` }"
        ></div>
        <h6>R {{this.price}}</h6>
        <h6>{{this.gender}}</h6>
        <p>{{this.description}}</p>
        <button class="addToCart"> Add to cart</button>
      </div>
    </div>
  </div>
  <div v-else></div>
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
    test(i) {
      // let bgColor = this.products[perfume_id-1].bgColor;
      console.log(i);
    },
    viewMore(perfume) {
      this.perfume_name = perfume.perfume_name;
      this.image_url = perfume.image_url;
      this.price = perfume.price;
      this.gender = perfume.gender;
      this.description = perfume.description;

      document.querySelector(".single_perfume").id = "showModal";
    },
    closeModal() {
      document.querySelector(".single_perfume").id = "hideModal";
    },

    con() {
      let frag = document.querySelectorAll(".perf");
      frag.forEach((f) => {
        f.id = "stopSlide";
      });
    },
    slide() {
      let frag = document.querySelectorAll(".perf");
      frag.forEach((f) => {
        f.id = "Slide";
      });
    },
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
    return {
      perfume_name: null,
      image_url: null,
      price: null,
      gender: null,
      description: null,

      products: [
        {
          textColor: "var(--tone-four)",
          bgColor: "var(--tone-one)",
        },
        {
          textColor: "var(--tone-five)",
          bgColor: "var(--tone-two)",
        },
        {
          textColor: "var(--tone-six)",
          bgColor: "var(--tone-three)",
        },
        {
          textColor: "var(--tone-one)",
          bgColor: "var(--tone-four)",
        },
        {
          textColor: "var(--tone-two)",
          bgColor: "var(--tone-five)",
        },
        {
          textColor: "var(--tone-three)",
          bgColor: "var(--tone-six",
        },
        {
          textColor: "var(--tone-four)",
          bgColor: "var(--tone-one)",
        },
        {
          textColor: "var(--tone-five)",
          bgColor: "var(--tone-two)",
        },
        {
          textColor: "var(--tone-six)",
          bgColor: "var(--tone-three))",
        },
        {
          textColor: "var(--tone-one)",
          bgColor: "var(--tone-four)",
        },
        {
          textColor: "var(--tone-two)",
          bgColor: "var(--tone-five)",
        },
        {
          textColor: "var(--tone-three)",
          bgColor: "var(--tone-six)",
        },
      ],
    };
  },
};
</script>
<style scoped>
.sinle_perf_name {
  font-size: larger;
}
.btn_close {
  background: none;
  border: none;
  scale: 2;
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.addToCart {
  background: none;
  border: none;
  border: 0.1rem solid;
  width: 6rem;
  height: 2rem;
  border-radius: 0.22rem;
  color: var(--tone-four)
}
#showModal {
  display: grid;
}
#hideModal {
  display: none;
}
.single_perfume {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  position: absolute;
  display: grid;
  place-items: center;
  z-index: +4;
}
.perfume_info {
  width: 35rem;
  height: 42rem;
  background-color: var(--tone-one);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:1rem;
  align-items: center;
  position: relative;
  padding: 0 0.5rem 0 0.5rem;
  color: var(--tone-four)
}
.search_bar i {
  color: rgba(0, 0, 0, 0.5);
  scale: 1.5;
}
.search_bar {
  position: absolute;
  z-index: +2;
  height: 4rem;
  display: flex;
  justify-content: right;
  top: 5rem;
  right: 0;
  gap: 1rem;
  margin-right: 2rem;
}
.perf_list {
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
}

.perf {
  padding: 5rem 0 0 2rem;
  min-width: calc(100vw / 3);
  background-color: var(--tone-three);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  animation: slide 50s linear infinite;
}

.image {
  width: 25rem;
  height: 25rem;
  background-position: center;
  background-size: cover;
}
.more {
  background: none;
  border: none;
  border: 0.1rem solid;
  width: 6rem;
  height: 2rem;
  border-radius: 0.22rem;
}

#stopSlide {
  animation-play-state: paused;
}

#Slide {
  animation-play-state: running;
}
.perf h6 {
  font-size: larger;
  padding-bottom: 1rem;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-366.66vw);
  }
}
</style>
