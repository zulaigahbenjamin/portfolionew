<template>
  <!-- <div>
    <carousel>

      <slide v-for="testimonial in testimonials" :key="testimonial.name">
        <img {{ testimonial.image }}/>
        <h3>{{ testimonial.name }}</h3>
        <p>{{ testimonial.occupation }}</p>
        <p>{{ testimonial.content }}</p>
      </slide>
    </carousel>
  </div> -->
<carousel>
 <h1 class="welcome-text">Hear What Others Have To Say !</h1>
  <div v-if="testimonials" class="flex-container">
    <CardComp v-for="testimonial of testimonials" :key="testimonial.id" :testimonial="testimonial"/>
  </div>
  <div v-else>Loading...</div>
  </carousel>
</template>

<script>

import CardComp from '@/components/CardComp.vue'



export default {
  components: { CardComp},
  
  computed : {
    testimonials() {
      return this.$store.state.testimonials
    }
  },
  mounted() {
    this.$store.dispatch('getTestimonials')
  },
}
</script>
<style scoped>
.flex-container {
display:grid;
grid-template-columns: repeat(2,1fr);
}
template{
text-decoration: none;
}
@media  screen and (max-width:300px) {
  .flex-container {
   display:flex;
   flex-wrap: wrap;
   width:100%;
   margin-left:0;
  }
  .welcome-text{
    text-align:center;
    padding:0;
    right:2%;
    
  }
}

.welcome-text {
  position: absolute;
 margin-bottom: 50000px;
  left: 30%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: slide-in 1s ease-in-out forwards;
  z-index: 1;
}
.flex-container {
display:grid;
grid-template-columns: repeat(2,1fr);
}
template{
text-decoration: none;
}

.welcome-text {
  position: absolute;
 margin-bottom: 50000px;
  left: 30%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: slide-in 1s ease-in-out forwards;
  z-index: 1;
}


@keyframes slide-in {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

</style>

<!-- <script>
export default {
  components: { CardComp},
  
  computed : {
    testimonials() {
      return this.$store.state.testimonials
    }
  },
  mounted() {
    this.$store.dispatch('getTestimonials')
  },
}
</script> -->
