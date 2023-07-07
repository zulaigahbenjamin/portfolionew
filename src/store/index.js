import { createStore } from 'vuex'
const dataProjects = "https://zulaigahbenjamin.github.io/jsonfile/data/db.json"

export default createStore({

  // state: {
  //   testimonials: null,
  //   testimonial: null,
  // },
  // /*projects*/
  // state: {
  //   projects: null,
  //   data:null,
  // },

  state: {
    projects: null,
    testimonials: null,
    testimonial: null,
    skills: null,
    education: null,
  },

  mutations: {
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setTestimonial: (state, testimonial) => {
      state.testimonial = testimonial;
    },
    /*projects*/
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    /*resume*/
    setSkills: (state, skills) => {
      state.skills = skills;
    },
    setEducation: (state, education) => {
      state.education = education;
    },


  },
  actions: {
    getTestimonials: async (context) => {
      fetch('https://zulaigahbenjamin.github.io/jsonfile/data/db.json')
        .then((res) => res.json())
        .then((data) => context.commit("setTestimonials", data.testimonials));
    },
    getTestimonial: async (context, id) => {
      fetch("https://zulaigahbenjamin.github.io/jsonfile/data/db.json" + id)
        .then((res) => res.json())
        .then((testimonial) => context.commit("setTestimonial", testimonial));
    },
    /*projects*/
    async fetchProjects(context) {
      try {
        let response = await fetch(dataProjects)
        let {projects} = await response.json()
        context.commit("setProjects", projects)
      }
      catch(error){
        alert(error.message)
      }
    },
    async fetchSkills(context) {
      try {
        let response = await fetch(dataProjects)
        let {skills} = await response.json()
        context.commit("setSkills", skills)
      }
      catch(error){
        alert(error.message)
      }
    },
    async fetchEducation(context) {
      try {
        let response = await fetch(dataProjects)
        let {education} = await response.json()
        console.log(education);
        context.commit("setEducation", education)
      }
      catch(error){
        alert(error.message)
      }
    }
   
  }
})
