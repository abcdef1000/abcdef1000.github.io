<template >
  <div class="view">
    <br><br>
    <p class="first_line"> HELLO </p>
    <p class="second_line"> IM WUHAO</p>
    <br><br>
    <h1 class="merry">2023 Class</h1>

    <div class="separator"></div>
    <h1 class="merry">2022 Class</h1>
    <div class="imgCont">
      <img id="classPhoto" src="@/assets/img/ClassPhoto.png">
      <p>{{classPhotoSrc22}}</p>
    </div>
  </div>
  
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.separator{
  margin-top: 100px;
  margin-bottom:100px;
  padding:0px;
  width:100%;
  height:300px;
  background: linear-gradient(to right, 
                              transparent 0%, 
                              transparent calc(50% - 0.81px), 
                              black calc(50% - 0.8px), 
                              black calc(50% + 0.8px), 
                              transparent calc(50% + 0.81px), 
                              transparent 100%); 

}
.first_line,
.second_line {
  white-space: nowrap; /* keep text in one line */
  overflow: hidden; /* hide text behind the cursor */
  margin: 0.5rem auto;
  font-family: "Press Start 2P", monospace;
  font-size: 2rem;
  font-weight: bold;
}
.first_line {
  border-right: 2px solid rgba(17, 17, 17, 0.9);
  /* define animation types for text + cursor */
  animation: typewriter_1 6s steps(33) 1s 1 normal both,
    first_cursor 900ms steps(33) 8;
}
.second_line {
  border-right: 2px solid rgba(17, 17, 17, 0.9);
  /* define animation types for text + cursor */
  animation: typewriter_2 5s steps(31) 1s 1 normal both,
    second_cursor 900ms steps(31) infinite;
  -webkit-animation-delay: 7s;
  animation-delay: 7s;
}

@keyframes typewriter_1 {
  from {
    width: 0;
  }
  to {
    width: 38rem;
  }
}
@keyframes typewriter_2 {
  from {
    width: 0;
  }
  to {
    width: 40rem;
  }
}
@keyframes first_cursor {
  from {
    border-right-color: rgba(17, 17, 17, 0.9);
  }
  to {
    border-right-color: rgba(255, 255, 255, 0.8);
  }
}
@keyframes second_cursor{
  from {
    border-right-color: rgba(17, 17, 17, 0.9);
  }
  to {
    border-right-color: rgba(255, 255, 255, 0.8);
  }
}


#home{
  padding-right:2em;
}
#classPhoto{
  width:100%;
}
.imgCont{
  position: relative;
  text-align: center;
  color: white;
  width: 100%;
}
#helloWords{
  font-family: "Merriweather";
}
.imgWords{
  font-family: "Merriweather";
  font-size:25px;
}
</style>
<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  data(){
    return {
      classPhotoSrc22: "@/assets/img/ClassPhoto.png",
    }
  },
  components: {
  },
  methods:{
    toggleImage: function (){
      if (this.data.classPhotoSrc == "@/assets/img/ClassPhoto.png"){
        this.data.classPhotoSrc = "@/assets/img/ClassPhotoWith.png"
      }
      else{
        this.data.classPhotoSrc = "@/assets/img/ClassPhoto.png"
      }
    }
  }
}
</script>
