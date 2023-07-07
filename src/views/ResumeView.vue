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
    <div class="resume-left">
      <div class="pic">
        <img src="https://i.postimg.cc/25PLP53k/IMG-2409-3.jpg" />
      </div>
      <div class="content">
        <div class="item contact">
          <div class="title">
            <h2>Zulaigah Benjamin</h2>
            <div class="position">Web Developer</div>
          </div>

          <ul>
            <li>
              <div class="li-wrap">
                <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                <div class="address">
                  <a href="#">Cape Town, South Africa</a>
                </div>
              </div>
            </li>
            <li>
              <div class="li-wrap">
                <div class="icon"><i class="fas fa-phone-square-alt"></i></div>
                <div class="tel">
                  <a href="#">074 342 8180</a>  
                </div>
              </div>
            </li>
            <li>
              <div class="li-wrap">
                <div class="icon"><i class="fas fa-envelope"></i></div>
                <div class="mail">
                  <a href="mailto:">zulaigahbenjamin01@gmail.com</a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="item about">
          <h3 class="title">about me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            officia est, eius voluptate, culpa, aspernatur nam expedita
            voluptates accusamus voluptatem dolorum. Deleniti, iste, incidunt
            porro aliquid dignissimos quasi mollitia neque dolor quaerat
            perferendis doloribus accusantium odit repudiandae fugit tenetur
            modi?
          </p>
        </div>

        <div class="item social-media">
          <ul>
            <li>
              <div class="icon">
                <a href="#"><i class="fab fa-facebook-square"></i></a>
              </div>
            </li>
            <li>
              <div class="icon">
                <a href="#"><i class="fab fa-twitter-square"></i></a>
              </div>
            </li>
            <li>
              <div class="icon">
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </div>
            </li>
            <li>
              <div class="icon">
                <a href="#"><i class="fab fa-instagram"></i></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="resume-right">
      <div class="row">
        <div class="education">
          <h3 class="title">education</h3>
          <ul>
            <li>
              <div class="date">2016 - 2020</div>
              <div class="info">
                <p class="bold">high school</p>
              </div>
            </li>
            <li>
              <div class="date">2023- currently</div>
              <div class="info">
                <p class="bold cap">Life Choice Academy</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="exp">
          <h3 class="title">experience</h3>
          <ul>
            <li>
              <div class="date">2023- currently</div>
              <div class="info">
                <p class="bold">Web Developer at Life Choice Academy</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="skills">
        <h3 class="title">skills</h3>
        <ul>
          <li>
            <div class="skill-name">html</div>
            <div class="skill-progress">
              <span style="width: 82%"></span>
            </div>
            <div class="percent">82%</div>
          </li>
          <li>
            <div class="skill-name">css</div>
            <div class="skill-progress">
              <span style="width: 75%"></span>
            </div>
            <div class="percent">75%</div>
          </li>
          <li>
            <div class="skill-name">javascript</div>
            <div class="skill-progress">
              <span style="width: 70%"></span>
            </div>
            <div class="percent">70%</div>
          </li>
          <li>
            <div class="skill-name">vue</div>
            <div class="skill-progress">
              <span style="width: 60%"></span>
            </div>
            <div class="percent">60%</div>
          </li>
        </ul>
      </div>

      <div class="hobbies">
        <h3 class="title">hobbies</h3>
        <ul>
          <li>
            <div class="hobby">
              <div class="icon"><i class="fas fa-book"></i></div>
              <div class="text">Reading</div>
            </div>
          </li>
          <li>
            <div class="hobby">
              <div class="icon"><i class="fas fa-music"></i></div>
              <div class="text">Music</div>
            </div>
          </li>
          <li>
            <div class="hobby">
              <div class="icon"><i class="fas fa-gamepad"></i></div>
              <div class="text">Gaming</div>
            </div>
          </li>
          <li>
            <div class="hobby">
              <div class="icon"><i class="fas fa-basketball-ball"></i></div>
              <div class="text">exercising</div>
            </div>
          </li>
        </ul>
      </div>

      <div class="others">
        <h3 class="title">other skills</h3>
        <ul>
          <li>
            <div class="circle-pie"></div>
            <div class="others-info">
              <div class="text">english</div>
              <div class="per">70%</div>
            </div>
          </li>
          <li>
            <div class="circle-pie"></div>
            <div class="others-info">
              <div class="text">photoshop</div>
              <div class="per">60%</div>
            </div>
          </li>
          <li>
            <div class="circle-pie"></div>
            <div class="others-info">
              <div class="text">communication</div>
              <div class="per">85%</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
}

body {
  background: #D8D5D1;
  font-size: 14px;
  line-height: 22px;
  color: #555555;
}

.resume {
  width: 900px;
  background: #F3EEE9;
  margin: 40px auto;
  display: flex;
}

.resume-left {
  width: 300px;
  background: #51a4ec;
}

.pic,
.pic img {
  width: 100%;
}

.content {
  padding: 10px 25px;
  /* display: flex; */
}

.content .item {
  margin: 20px 5px;
}

.contact .title {
  text-transform: capitalize;
}

.title h2 {
  font-size: 30px;
  font-weight: 700;
}
.position {
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.content ul li {
  margin: 15px 0;
}
.content ul li a {
  display: inline-block;
  text-decoration: none;
  color: #817e9e;
  padding: 10px;
}

.content ul li i {
  font-size: 20px;
  color: #392CB4;
}

.li-wrap {
  display: flex;
  align-items: center;
}
.icon {
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.address,
.tel,
.mail {
  display: flex;
  align-items: center;
}

.address>a,
.tel>a,
.mail>a {
  margin-left: 30px;
  font-size: 16px;
  font-weight: bold;
}

.item {
  border-bottom: 2px solid #6B6754;
}

.item:last-child {
  border-bottom: 0;
}

.about .title {
  font-size: 24px;
  text-transform: capitalize;
  margin-bottom: 10px;
}

.about p {
  margin-bottom: 10px;
}

.social-media ul {
  display: flex;
  flex-wrap: wrap;
}

.social-media li {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-media .icon {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin: 10px;
}

.social-media .icon i {
  font-size: 30px;
}

.social-media .icon a {
  padding: 20px;
}

.resume-right {
  width: 600px;
  padding: 20px;
}

.row {
  display: flex;
}

.row .title {
  font-size: 30px;
  color: #1133c9;
  text-transform: capitalize;
  margin-bottom: 10px;
}

.education {
  padding: 25px;
}

.exp {
  padding: 25px;
}

.date {
  color: #0E647F;
  font-size: 20px;
}

.bold {
  font-weight: 700;
}

.info {
  margin-top: 5px;
}

.info p {
  color: #0E647F;
  font-size: 16px;
  text-transform: capitalize;
}

p.cap {
  text-transform: uppercase;
}

.resume-right .education {
  width: 50%;
  background: #E4E3EE;
}

.resume-right .exp {
  width: 50%;
  background: #E4E3EE;
}


.resume-right .education li,
.resume-right .exp li {
  position: relative;
  margin-bottom: 20px;
}

.resume-right .education li::before,
.resume-right .exp li::before {
  content: '';
  position: absolute;
  top: 5px;
  left: -18px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 2px solid #1133c9;
}



.resume-right .education li::after,
.resume-right .exp li::after {
  content: '';
  position: absolute;
  height: 58px;
  width: 2px;
  top: 13px;
  left: -14px;
  background: #1133C9;
}

.skills,
.hobbies,
.others {
  margin-top: 20px;
  padding-bottom: 20px;
  background: #E4E3EE;
}

.skills .title,
.hobbies .title,
.others .title {
  font-size: 30px;
  color: #1133c9;
  text-transform: capitalize;
  margin: 20px 20px;
  display: inline-block;
}

.skills ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 15px;
}

.skills .skill-name {
  width: 25%;
  color: #0E647F;
  font-size: 20px;
}

.skill-progress {
  width: 65%;
  height: 8px;
  position: relative;
  background: #fff;
}

.skills .percent {
  width: 10%;
  margin-left: 20px;
}

.skills .skill-progress span {
  top: 0;
  left: 0;
  height: 100%;
  background: #009fd9;
  position: absolute;
}

/* hobby */

.hobbies ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.hobbies .hobby {
  text-align: center;
  color: #392CB4;
  font-size: 20px;
}

.hobbies .icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.hobbies .text {
  color: #0E647F;
}


/* others */

.others ul {
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: space-around;
}


.circle-pie {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #fff linear-gradient(to right, #fff 50%, #009fd9 0);

}

ul li:nth-child(1) .circle-pie::before {
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  background-color: #009fd9;
  transform-origin: left;
  border-radius: 0 100% 100% 0 / 50%;
  transform: rotate(70deg);
  /* border: 1px solid rgb(212, 58, 109); */
}


ul li:nth-child(2) .circle-pie::before {
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  background-color: #009fd9;
  transform-origin: left;
  border-radius: 0 100% 100% 0 / 50%;
  transform: rotate(30deg);
}


ul li:nth-child(3) .circle-pie::before {
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  background-color: #009fd9;
  transform-origin: left;
  border-radius: 0 100% 100% 0 / 50%;
  transform: rotate(120deg);
}



.others-info {
  margin-top: 10px;
  text-align: center;
  color: #0E647F;
  font-size: 20px;
  text-transform: capitalize;
}
</style>
