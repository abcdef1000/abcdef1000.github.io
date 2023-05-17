<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark" id="mainnav">
      <a class="navbar-brand" id="navbrand">Portfolio</a>
      <span class="navbar-text">Wu Hao 2i3 2022</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse justify-content-end" id="navbarText">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                  <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/infocomm">Infocomm</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/events">Events</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/academics">Academics</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/challenges">Challenges</router-link>
              </li>
          </ul>
      </div>
  </nav>
  <router-view class="view"/>
  <footer class="footer">
    <div class="container-fluid">
      <span style="float:left;">Made by Wu Hao</span>
      <span style="float:right;">2022</span>
    </div>
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');
#topButton{
  font-family: "Merriweather";
  margin-bottom:2em;
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 24px; /* Increase font size */
  background-color: white;
} #topButton:hover {
  color: rgb(116, 178, 255); /* Add a dark-grey background on hover */
}
 #big{
  font-size:100px;
  text-align: left;
  text-orientation: mixed;
  writing-mode: vertical-rl;
  font-family: 'Merriweather';
  font-weight: 700;
}
.text{
  text-align: justify;
  font-size:25px;
}
#scrollspy{
  padding-top: 3em;
  position:sticky;
  top: 0;
  font-size:18px;
  color:grey;
  list-style: none;
}
.activeitem{
  color:#2F3061;
}
/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

/* Top left text */
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

/* Top right text */
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

/* Bottom right text */
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

.view{
  margin-top:2em;
  margin-bottom:2em;
  padding-left:5em;
  padding-right:5em;
}

::-webkit-scrollbar {
    display: none;
}
.footer{
  position: fixed;
  bottom: 0;
  left:0;
  width: 200px;
  font-size: 11px;
  font-family: 'Courier New', Courier, monospace;
  padding-top:2px;
  /* height: 30px;
  line-height: 60px; */
  background-color: #2F3061;
  border:black 2px solid;
  color: white;
}
.nav-item{
  font-size:24px;
}
.navbar-text {font-size:20px;}
#navbrand {font-size:25px; font-family: "Merriweather";}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: rgb(1, 25, 54);
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
