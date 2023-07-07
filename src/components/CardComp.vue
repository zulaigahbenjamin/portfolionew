<template>

    <router-link :to="{ name: 'testimonials', params: { id: testimonial.id }}" class="cardbody">
     <img :src="testimonial.image" />
     <h3>{{ testimonial.name }}</h3>
     <p>{{ testimonial.occupation }}</p>
     <p>{{ testimonial.content }}</p>
   </router-link>

  
 </template>
 
 <script>
 export default {
   props: ["testimonial"],
   methods: {
     logger() {
       requestAnimationFrame(this.logger);
       console.log(this.testimonial);
     },
   },
   mounted() {
     // this.logger()
   },
 };
 </script>
 
 <style scoped>

 * {
   text-decoration: none;
   color:rgb(255, 255, 255);
   /* background-color:rgb(76, 120, 147); */
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 }
 .cardbody {
   border-radius: 2px;
   padding: 10px;
   border: 4px solid rgb(201, 199, 199);
   padding: 20px;
border-radius:5px;
   box-shadow: 10px 8px 50px rgba(59, 189, 222, 0.2);
   background-color:rgb(73, 90, 101);
   margin: 20px;
   font-size: medium;
   text-align: center;
   width: 402px;
   margin-top:90px;
   margin-left: 100px;
   transition: transform 0.4s ease-in-out; /* Added transition */
 }
 /* @media  screen and (max-width:700p) {
  .flex-conatiner {
    display: grid;
    grid-template-columns:subgrid;
    margin-left: 0;
    padding: 0px;
  }

} */
 
 .cardbody:hover {
   transform: scale(1.05); /* Updated transform on hover */
 }
 img {
   width:max-content;
   height: 600px;
   width:422px;
   padding:0;
   margin-left:-10px;
   margin-top:-11px;
   object-fit: cover;
   border-radius:20px;
 }
 </style>
 
  <style scoped>

 
  * {
    text-decoration: none;
    color:rgb(255, 255, 255);
    /* background-color:rgb(76, 120, 147); */
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .cardbody {
    border-radius: 2px;
    padding: 10px;
    border: 4px solid rgb(201, 199, 199);
    padding: 20px;
border-radius:5px;
    box-shadow: 10px 8px 50px rgba(59, 189, 222, 0.2);
    background-color:rgb(73, 90, 101);
    margin: 20px;
    font-size: medium;
    text-align: center;
    width: 402px;
    margin-top:90px;
    margin-left: 100px;
    transition: transform 0.4s ease-in-out; /* Added transition */
  }
  
  .cardbody:hover {
    transform: scale(1.05); /* Updated transform on hover */
  }
  img {
    width:max-content;
    height: 600px;
    width:422px;
    padding:0;
    margin-left:-10px;
    margin-top:-11px;
    object-fit: cover;
    border-radius:20px;
  }
  </style>
  

