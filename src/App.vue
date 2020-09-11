<template>
  <div id="app">
    <div id="nav">

      <b-navbar toggleable="lg" type="dark" variant="dark">

        <div class="logo text-center">
          <img src="./assets/hombre-palo.png" height="43" width="50"/>
          <h6>PCD</h6>
        </div>

        <b-navbar-brand class="router" >
          <router-link style="text-decoration: none" to="/">Home</router-link>
        </b-navbar-brand>

        <b-navbar-brand class="router">
          <router-link style="text-decoration: none" to="/info">Ejemplo</router-link>
        </b-navbar-brand>

        <b-navbar-brand class="router">
          <router-link style="text-decoration: none" to="/Proceso">Puntos de casos de uso</router-link>
        </b-navbar-brand>
      </b-navbar>

    </div>

    <router-view/>

  </div>
</template>

<style>
  .logo{
    padding: 0px 40px 0px 0px;
    color: white;
    font-family: 'Open Sans', sans-serif;
  }
  .router{
    text-decoration: none;
    font-weight: bold;
  }
  .router a{
    color: white;
  }
  .router a:hover{
    color: whitesmoke;
  }
  .router a.router-link-exact-active {
    color: deepskyblue;
  }
</style>
