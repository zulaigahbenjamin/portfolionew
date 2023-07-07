<template>

  <nav>

    <nav>
      
      <ul>
        
        <span><li><router-link to="/">Home</router-link></li></span>
        <span><li><router-link to="/about">About </router-link></li></span>
        <span><li><router-link to="/testimonials">Testimonials</router-link></li></span>
        <span><li><router-link to="/projects">Projects</router-link></li></span>
        <span><li><router-link to="/contact">Contact </router-link></li> </span>
       <li><button @click="goToContactPage" class="hire-me">Hire Me</button></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
*, ::before ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  background-color: #555555;
}
.nav-bloc {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
}

span {
  
  color: aliceblue;
  padding: 10px;
  cursor: pointer;
  font-family: sans-serif;
  text-align: center;
}

span::after {
  content:'';
  display: block;
  width: 0;
  height: 2px;
  border-radius: 3px;
  background: antiquewhite;
  transition: width 0.2s ease-out;
}

span:hover::after{
  width: 100%;
}



  .hire-me{
    background-color:rgba(162, 162, 233, 0.582);
    color:rgb(0, 0, 0); 
    border-radius: 5px;
    padding:8px;
    /* margin-left: 80px;  */
    float:right;

    
    <ul>
      
      <span><li><router-link to="/">Home</router-link></li></span>
      <span><li><router-link to="/about">About </router-link></li></span>
      <span><li><router-link to="/testimonials">Testimonials</router-link></li></span>
      <span><li><router-link to="/resume">Resume</router-link></li></span>
      <span><li><router-link to="/projects">Projects</router-link></li></span>
      <span><li><router-link to="/contact">Contact </router-link></li> </span>
     <li><button @click="goToContactPage" class="hire-me">Hire Me</button></li>
    </ul>
  </nav>
</template>

<style scoped>
*, ::before ::after {
box-sizing: border-box;
margin: 0;
padding: 0;
}

body{
background-color: #555555;
}
.nav-bloc {
width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
justify-content: center;
}

span {

color: aliceblue;
padding: 10px;
cursor: pointer;
font-family: sans-serif;
text-align: center;
}

span::after {
content:'';
display: block;
width: 0;
height: 2px;
border-radius: 3px;
background: antiquewhite;
transition: width 0.2s ease-out;
}

span:hover::after{
width: 100%;
}
.hire-me{
  background-color:rgba(162, 162, 233, 0.582);
  color:rgb(0, 0, 0); 
  border-radius: 5px;
  padding:8px;
  /* margin-left: 80px;  */
  float:right;
  
  margin-top: 0;

}
nav {
  background-color: rgb(99, 116, 136);
  color: black;
  padding: 20px;
  height:40px;
  text-align: center;
  font-size: larger;
 
}
router-link, li:hover{
  color:blue;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  display:flex;
}
li:hover {
  color:blue;
}

li {
  margin-right: 10px;
  /* background-color:blue;
  padding:10px; */
}

a {
  color: #ffffff;
  text-decoration: none;
}
@media only screen and (max-width: 300px){
 nav {
  width:100%;
 }
 nav, span {
  width:100%;
 }
 a {
  display:flex;
  flex-wrap: wrap; 
  
  margin:0;
 
 }
}

router-link:hover {
  
  color: rgb(0, 0, 0);
  padding:10px;
}

nav a:hover {
  color:rgb(90, 66, 90);
}
nav a.router-link-exact-active {
  color:rgb(125, 99, 125);
}
</style>
<script>
=======
  }
  nav {
    background-color: rgb(99, 116, 136);
    color: black;
    padding: 20px;
    height:40px;
    text-align: center;
    font-size: larger;
   
  }
  router-link, li:hover{
    color:blue;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    justify-content: center;
    display:flex;
  }
  li:hover {
    color:blue;
  }
  
  li {
    margin-right: 10px;
    /* background-color:blue;
    padding:10px; */
  }
  
  a {
    color: #ffffff;
    text-decoration: none;
  }
  
  router-link:hover {
    
    color: rgb(0, 0, 0);
    padding:10px;
  }

  nav a:hover {
    color:rgb(90, 66, 90);
  }
  nav a.router-link-exact-active {
    color:rgb(125, 99, 125);
  }
  </style>
  <script>

export default {
methods: {
  goToContactPage() {
    this.$router.push('/contact');
  }
}
}
</script>
