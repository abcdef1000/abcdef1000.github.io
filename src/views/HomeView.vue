<template>
    <h1 class="merry">My Class</h1>

  <div class="imgCont">
    <img id="classPhoto" src="@/assets/img/ClassPhoto.png">
    <p>{{classPhotoSrc}}</p>
  </div>
  
</template>
<style scoped>
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
