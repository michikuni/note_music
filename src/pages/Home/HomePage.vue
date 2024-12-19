<template>
    <div class="container">
      <div class="left-navigate">
        <div class="navigate-item" id="nav-logo"><img src="./logo.png" alt="Logo"></div>
        <div class="navigate-item" id="nav-library">Library</div>
        <div class="navigate-item" id="nav-discover">Discover</div>
        <div class="navigate-item" id="nav-chart">#notechart</div>
        <div class="navigate-item" id="nav-artist">Artist</div>
        <div class="navigate-item" id="nav-album">Album</div>
        <hr>
        <div class="navigate-item" id="nav-category">Topic & Category</div>
        <div class="navigate-item" id="nav-top">Top 100</div>
        <div class="navigate-item" id="add-playlist">+ Add new playlist</div>
      </div>
      <div class="content">
        <div class="top-navigate">
          <div class="nav-backfor" id="backward"></div>
          <div class="nav-backfor" id="forward"></div>
          <div  class="nav-search">
            <img src="./search.png" id="search-icon">
            <input type="text" id="search-input" placeholder="Find some songs, music artists,...">
          </div>
          <div class="go-premium">Go premium</div>
          <div class="nav-settings" @click="toggleMenu">
            <div class="nav-menu-dropdown" v-if="isMenuOpen">
              <ul>
                <li class="component-nav-menu"><img src="./play-icon.png" class="icon-menu"><router-link to="#" style="color: white; text-decoration: none;">Music player</router-link></li>
                <li class="component-nav-menu"><img src="./interface.png" class="icon-menu"><router-link to="#" style="color: white; text-decoration: none;"> Display</router-link></li>
                <hr>
                <li class="component-nav-menu"><img src="./introduce.png" class="icon-menu"><router-link to="#" style="color: white; text-decoration: none;">About us</router-link></li>
                <li class="component-nav-menu"><img src="./TOS.png" class="icon-menu"><router-link to="#" style="color: white; text-decoration: none;">Term of service</router-link></li>
                <li class="component-nav-menu"><img src="./privacy.png" class="icon-menu"><router-link to="#" style="color: white; text-decoration: none;">Privacy policy</router-link></li>
                <li class="component-nav-menu"><img src="./report.png" class="icon-menu"><router-link to="#" style="color: white; text-decoration: none;">Reporting copyright infringement</router-link></li>
                <li class="component-nav-menu"><img src="./AD.png" class="icon-menu"><router-link to="#" style="color: white; text-decoration: none;">Advertisement</router-link></li>
                <li class="component-nav-menu"><img src="./contact.png" class="icon-menu"><router-link to="#" style="color: white; text-decoration: none;">Contact</router-link></li>
              </ul>
            </div>
          </div>
          <div class="login-signup" @click="goToLogin"></div>
        </div>
        <div class="home-slide"></div>
      </div>
      
    </div>
  </template>
  
<script>
  export default {
    data() {
      return {
        isMenuOpen: false
      };
    },
    name: 'HomePage',
    methods: {
      toggleMenu(){
        this.isMenuOpen = !this.isMenuOpen;
      },
      goToLogin() {
        this.$router.push('/login');
      }
    }
  };
</script>
<style scoped>
.container{
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  height: 630px;
  font-family: Arial, Helvetica, sans-serif;
}
.left-navigate{
  width: 16%;
  height: 695px;
  background-color: #410546;
  position: fixed;
  color: rgb(255, 255, 255);
}

#nav-logo{
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  height: 60px;
}

.navigate-item:hover{
  background-color: #614f66;
}

.navigate-item#add-playlist{
  margin-top: 99%;
}

.navigate-item{
  height: 6%;
  padding-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.content{
  width: 100%;
  height: 100%;
  background-color: #201121;
}

.top-navigate{
  width: 84%;
  height: 13%;
  margin-left: 16%;
  display: flex;
}

.nav-backfor{
  width: 16px;
  height: 16px;
  margin: 3% 2%;
}

#backward{
  background-image: url(./backward.png);
}

#forward{
  background-image: url(./forward.png);
}

.nav-search{
  width: 40%;
  margin: 2% 14% 2% 2%;
  border-radius: 40px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
}

#search-icon{
  width: 16px;
  height: 16px;
  margin: 0 2%;
}

#search-input{
  width: 90%;
  height: 80%;
  border: none;
  outline: none;
}

.go-premium{
  width: 10%;
  display: flex;
  margin: 2% 0 2% 10%;
  border-radius: 40px;
  background-color: #9b4de0;
  color: white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.nav-settings{
  width: 32px;
  height: 32px; 
  margin: 2%;
  background-image: url(./setting.png);
}

.nav-menu-dropdown{
  border-radius: 5px;
  background-color: #34224f;
  position: absolute;
  margin-top: 3% ;
  left: 84%;
}

ul{
  margin: 0;
  padding: 0;
}

.component-nav-menu{
  list-style: none;
  padding: 10px 20px;
  width: 180px;
  cursor: pointer;
  color: white;
}

.icon-menu{
  margin-right: 10px;
}

.login-signup{
  width: 32px;
  height: 32px;
  margin: 2%;
  background-image: url(./user.png);
}

.home-slide{
  width: 84%;
  height: 40%;
  margin-left: 16%;
  display: flex;
  background-color: #5d2f69;
}
</style>
  