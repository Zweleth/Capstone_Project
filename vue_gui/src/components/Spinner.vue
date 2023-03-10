<template lang="">
  <div class="loader">
    <span class="dot aqua-dot"></span>
    <span class="dot gray-dot"></span>
  </div>
</template>
<script>
export default {
    name: 'spinner'
};
</script>
<style scoped>
.loader {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: +2;
    height: 100vh;
    width: 100vw;
    animation: loadingFade 6s ease-in-out forwards;
    background-color: var(--tone-one);
}

.dots {
    width: 10rem;
    height: 6rem;
    z-index: +3;
}

.dot {
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
}

.aqua-dot {
    background-color: var(--tone-four);
    animation: preLoad2 1s ease-in-out infinite;
    
}

.gray-dot {
    background-color: var(--tone-three);
    animation: preLoad 1s ease-in-out infinite;
}

@keyframes preLoad {
    0%{
        transform: translateX(0);
        scale:1;
        z-index: 1;
    }
    25%{
        scale:1.6;
        z-index: 1;
    }
    50%{
        transform: translateX(-2rem);
        scale:1;
        z-index: 0;
    }
    75% {
        scale:0.7;
        z-index: 0;
    }
    100%{
        transform: translateX(0);
        scale:1;
        z-index: 0;
    }
}

@keyframes preLoad2 {
    0%{
        transform: translateX(0);
        scale:1;
        z-index: 0;
    }
    25%{
        scale:0.7;
        z-index: 0;
    }
    50%{
        transform: translateX(2rem);
        scale:1;
        z-index: 1;
    }
    75% {
        scale:1.6;
        z-index: 1;
    }
    100%{
        transform: translateX(0);
        scale:1;
        z-index: 1;
    }
}
</style>
