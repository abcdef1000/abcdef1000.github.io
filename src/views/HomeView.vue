<template>
    <h1 class="merry">My Class</h1>
  <div class="imgCont">
    <img id="classPhoto" src="@/assets/img/ClassPhoto.png">
    <p>{{classPhotoSrc}}</p>
  </div>
  
</template>
<style scoped>
.typewriter h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
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
      classPhotoSrc: "@/assets/img/ClassPhoto.png",
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
