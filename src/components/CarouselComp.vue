<template>
    <router-link :to="{name: 'testimonials',params:{id: testimonial.id}}">
        <img :src="testimonial.image"/>
        <h3>{{ testimonial.description }}</h3>
        <p>{{ testimonial.github-link }}</p>
        <p>{{ testimonial.netlify-link }}</p>
    </router-link>
</template>
<script>
export default {
    props: ["testimonial"],
    methods: {
        logger(){
            requestAnimationFrame(this.logger)
            console.log(this.testimonial);
        },
    },
    mounted() {
        // this.logger()
    },
   
}
</script>
<style scoped>

</style>
  