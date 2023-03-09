<template>
  <div class="home">
    <div class="top">
      <h3>Luxury fragrances</h3>
      <img src="https://i.postimg.cc/k5g6nv56/perfume-2.png" alt="">
    </div>
    <div class="bottom">
      <h3>For luxury cars</h3>
      <img src="https://i.postimg.cc/k5g6nv56/perfume-2.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {

  }
}
</script>
<style scoped>
  .home {
    width: 100vw;
    height: 100vh;
  }

  .top {
    height: 75vh;
    width: 100vw;
    background-color: var(--tone-one);
    position: relative;
  }

  .top img {
    filter: invert(82%) sepia(18%) saturate(655%) hue-rotate(345deg) brightness(93%) contrast(86%);
    position: absolute;
    bottom: -10rem;
    right: 10rem;
  }
  .top h3 {
    color: var(--tone-three);
    position: absolute;
    bottom: 0;
    left: 5rem;
    font-size: 5rem;
  }
  
  .bottom {
    height: 25vh;
    width: 100vw;
    background-color: var(--tone-three);
    position: relative;
    overflow: hidden;
  }

  .bottom img {
    filter: invert(91%) sepia(22%) saturate(142%) hue-rotate(345deg) brightness(99%) contrast(87%);
    position: absolute;
    top: -22.1rem;
    right: 10rem;
  }
  .bottom h3 {
    color: var(--tone-one);
    position: absolute;
    top: 0;
    left: 5.2rem;
    font-size: 3rem;

    
  }
</style>
