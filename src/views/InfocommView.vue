<template>
<div class="row no-gutters">
  <div class="col">
    <ul v-scroll-spy-active="{selector: 'li', class: 'activeitem'}" v-scroll-spy-link id="scrollspy">
      <li><a>Competitive Programming</a></li>
      <li><a>Using Linux</a></li>
      <li><a>Server Hosting</a></li>
      <li><a>Learning Flutter and Web Development</a></li>
    </ul>
  </div>
  <div class="col-8">
    <div v-scroll-spy>
      <PostComp title="Competitive Programming in C++" img="cpp.png" date="Too hard" txt="
      Coding to solve (sometimes ridiculous) problems. Extremely difficult (Derrick too good at this), but I aim to qualify for the National Olympiad in Informatics next year. My June holidays will be spent on this.
      "><br><br><br><br><br><br></PostComp>
      <PostComp title="Using Linux" date="Linux good"  img="tux.png" txt="
      Linux is an alternative operating system to Windows. It is free, open-source, fast, virus-free (almost all viruses are targeted at Windows instead), and gives you complete control of your system. However, many games cannot run on Linux (but some, like Minecraft and CS:GO runs faster on linux). Linux performs better on weaker hardware, as it has no preinstalled bloat unlike Windows.
      "><br/><p class="text">I use Manjaro, with the i3-gaps window manager. Linux speeds up coding efficiency, as its terminal is extremely powerful and well integrated. For example, if you wanted to install gimp(photoshop software), you could simply open a terminal (ctrl+enter) and type in "sudo pacman -S gimp". Easy  </p></PostComp>
      
      
      <PostComp title="Server Hosting" img="server.jpeg" date="Minecraft?" txt="
      I converted a 9 years old pc that can hardly run chrome into a home server. I installed Ubuntu Linux server onto it (it does not have a gui) and it is currently running in the background hosting a minecraft server for 2i3.
      "><br/>
        <img src="@/assets/img/minecraft.jpg" style="float:right; max-width: 30%; margin-left: 2em;">
        <p class="text">Classmates in the minecraft server hosted on the pc. It provides a after-school online platform for my classmates to bond and destress together, instead of alone in singleplayer</p>
      </PostComp>
      <div class="row no-gutter">
      <div class="col">
      <PostComp title="Learing Flutter" date="How do you use Flutter" img="flutter.png" txt="
        Flutter is used to make mobile (both android and ios) apps. I am still currently learning, and my goal is to create a productivity app by the end of the holidays.
       "/>
       </div>
       <div class="col">
      <PostComp title="Learning Web Development" date="Google sites?" img="ss.png" txt="
      This website was coded (took around 5 hours) instead of thrown together using Google sites. I used what I learnt in Infocomm CCA (vue) to build this, a very cool side project and useful skill in the future.
      "></PostComp>
      </div>
      </div>
    </div>
    <button onclick="document.documentElement.scrollTop = 0;" id="topButton">&uarr; Top</button>
  </div>
  <div class="col">
    <h1 id="big">INFOCOMM CCA</h1>
  </div>
</div>
</template>
<script>
// @ is an alias to /src
import PostComp from '@/components/PostComp.vue'

export default {
  name: 'InfocommView',
  components: {
    PostComp,
}
}

</script>