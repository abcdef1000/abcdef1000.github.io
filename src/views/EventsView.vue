<template>
<div class="row no-gutters">
  <div class="col">
    <ul v-scroll-spy-active="{selector: 'li', class: 'activeitem'}" v-scroll-spy-link id="scrollspy">
      <li><a>Founders' Day</a></li>
      <li><a>SOO 2022</a></li>
    </ul>
  </div>
  <div class="col-8">
    <div v-scroll-spy>
      <PostComp title="Founders' Day Prize Giving" img="FoundersDay.jpeg" date="21st March 2022" txt="
      I received awards for good results in History and Lower Secondary Science last year. My class 2i3 had the most award winners (4), and had at least one person in every subject except for Infocomm (how does the school determine best in Infocomm when there are only one or two 10 minute tests throughout the year??). I could not have achieved this without the continuous support and careful guidance of my secondary one  teachers. I hope that I can maintain my results for this second year. See you after the holidays History! 
      "></PostComp>
      <PostComp title="Secondary One Orientation 2022" img="HwaChongSOO.jpeg" date="3rd January 2022" txt="
      The first 2 days of the year were the most long, tiring, yet fulfilling days. I led the freshmen of 1i4 through many games, and was the first impression of Hwa Chong on them. I have always wanted to interact with freshmen ever since I was one myself, and that wish has been completed. I was really nervous when I met them for the first time. What would they think of me? I was only Secondary 2, one year older (, and shorter than one of them). However, my nervousness subsided over time, and I learnt how to control my group. The SOO experience has enriched my understanding of what it means to be a leader, and made me more experienced. See you next year SOO'23!
      "></PostComp>
    </div>
    <button onclick="document.documentElement.scrollTop = 0;" id="topButton">&uarr; Top</button>

  </div>
  <div class="col">
    <h1 id="big">EVENTS</h1>
  </div>
</div>
</template>

<style>

html{
  scroll-behavior: smooth;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;

  /* > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  } */
}
</style>

<script>
// @ is an alias to /src
import PostComp from '@/components/PostComp.vue'

export default {
  name: 'EventsView',
  components: {
    PostComp,
}
}

</script>
