<template>
    <div id="body" class="line" :class="{pad: !date}">
      <h3 v-if="date" class="date">{{date}}</h3>
      <div>
      <h2>{{title}}</h2>
      <img id="image" :src="require('@/assets/img/' + img + '')">
      <p class="text">{{txt}}</p>
      <slot></slot>
      </div>
    </div>
</template>
<style scoped>

.date{
        border:1px solid black;

    width:150px;
    margin-top:-60px;
    margin-left:100px;
    background:white;
    font-size:medium;
}

.line{
    border: 1px solid black;
  background-color: #fbf9ee;
  padding-top:50px;
  padding-left:2em;
  padding-right: 2em;
  margin-bottom:3em;
}
.pad{
  padding-top:25px;
}

#image{
  object-fit: contain;
  float:left;
  max-width: 20%;
  margin-right:2em;
}
.text{
  text-align: justify;
  font-size:25px;
}
</style>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'PostComp',
  props: ["txt", "img", "date", "title"]
}

</script>
