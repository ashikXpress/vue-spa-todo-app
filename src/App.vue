<template>
  <div id="nav">
      <div class="container">
          <div class="row">
              <div class="col-md-8 offset-md-2">
                  <div class="card">
                      <div class="card-body">
                          <router-link class="btn btn-success text-white text-bold" to="/">TO-DO Lists</router-link> <router-link to="/add-to-do" class="btn btn-success text-white text-bold">Add a new To-Do +</router-link>
  
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <router-view/>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #42b983;
  min-height: 601px;
}

#nav {
  padding-top: 30px;
  padding-bottom: 15px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@import'~bootstrap/dist/css/bootstrap.css'
</style>
