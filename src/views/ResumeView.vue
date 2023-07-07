<!-- <template>
    <div class="pic">
        <img src="https://i.postimg.cc/25PLP53k/IMG-2409-3.jpg" alt="pic" class="pic">
        <h2 class="name">Zulaigah Benjamin</h2>
        <div class="socials">
            <ul>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-linkedin"></i></li>
            </ul>
        </div>
        <div class="what">
            Web Developer
        </div>
    </div>
    <div class="container">
        <div class="row one">
            <div class="col-md-4" v-if="education">
                <h2 class="left">Education:</h2>
            </div>
            <div class="col" v-for="edu in education" :key="edu.name">
                <div>{{ edu.name }}</div>
                <div>{{ edu.desc }}</div>
            </div>
        </div>
        <div class="row">
            <div class="col thing">
                <h2>Soft Skills:</h2>
            </div>
            <div class="col" v-if="skills">
                <ul v-for="skill in skills" :key="skill.name">
                    <li>{{ skill.desc }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    computed: {
        education() {
            return this.$store.state.education;
        },
        skills() {
            return this.$store.state.skills
        }
    },
    mounted() {

        this.$store.dispatch("fetchSkills");
        this.$store.dispatch("fetchEducation");
    },
};
</script>
  
<style scoped>
.pic {
    border-radius: 200px;
    width:200px;
    height:250px;
    margin-top: 20px;
   margin-left:40%;
    justify-content:center;
    position: relative;
}
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
}

img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
}

p {
    font-size: 14px;
}

.btn-three {
    color: #363333;
    transition: all 0.5s;
    position: relative;
}

.btn-three::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(122, 115, 115, 0.1);
    transition: all 0.3s;
}

.btn-three:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
}

.btn-three::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(138, 69, 69, 0.5);
    transform: scale(1.2, 1.2);
}

.btn-three:hover::after {
    opacity: 1;
    transform: scale(1, 1);
}
</style> -->
<template>
    <div class="resume">
      <header>
        <h1>{{ name }}</h1>
        <p>{{ jobTitle }}</p>
        <div class="contact">
          <p>{{ phone }}</p>
          <p>{{ email }}</p>
          <p>{{ address }}</p>
          <p>{{ website }}</p>
        </div>
      </header>
      <section>
        <h2>Summary</h2>
        <p>{{ summary }}</p>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
      </section>
      <section>
        <h2>Experience</h2>
        <div v-for="experience in experiences" :key="experience.company">
          <h3>{{ experience.position }}</h3>
          <h4>{{ experience.company }}</h4>
          <p>{{ experience.duration }}</p>
          <ul>
            <li v-for="task in experience.tasks" :key="task">{{ task }}</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>Education</h2>
        <div v-for="education in educations" :key="education.university">
          <h3>{{ education.degree }}</h3>
          <h4>{{ education.university }}</h4>
          <p>{{ education.duration }}</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Resume',
    data() {
      return {
        name: 'Zulaigah Benjamin',
        jobTitle: 'Web Developer',
        phone: '063 620 2772',
        email: 'zulaigahbenjamin01@gmail.com',
        address: '5 hyacinth street',
        website: '',
        summary: 'Summary of your professional background and career objectives.',
        skills: [],
        experiences: [
          {
            position: 'Position 1',
            company: 'Company 1',
            duration: 'Duration 1',
            tasks: ['Task 1', 'Task 2', 'Task 3']
          },
          {
            position: 'Position 2',
            company: 'Company 2',
            duration: 'Duration 2',
            tasks: ['Task 1', 'Task 2', 'Task 3']
          }
        ],
        
      };
    },
    computed: {
        education() {
            return this.$store.state.education;
        },
        skills() {
            return this.$store.state.skills
        }
    },
    mounted() {

        this.$store.dispatch("fetchSkills");
        this.$store.dispatch("fetchEducation");
    },
  };
  </script>
  
  <style scoped>
 .contact {
    float: left;
 }
  </style>
  