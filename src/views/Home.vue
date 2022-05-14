<template>
  <div class="home">
      <div class="container">
          <div class="row">
              <div class="col-md-8 offset-md-2">
                  <div class="card">
                      <div class="card-header">
                          <h3 class="card-title">TO-DO Lists</h3>
                      </div>
                      <div class="card-body">
                        
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Item</th>
                              <th scope="col">Description</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                             <tr v-for="(todo,key) in todos" :key="todo.id">
                                <td scope="row">{{ ++key }}</td>
                                <td>{{todo.item_name}}</td>
                                <td>{{todo.description}} </td>
                                <td>
                                  <router-link :to="{ name: 'Edit', params: {id: todo.id} }" class="btn btn-success btn-sm text-white"> Edit </router-link> <button class="btn btn-danger btn-sm" @click="deleteTodo(todo.id)"> X</button>
                                </td>
                            </tr>
                          
                          </tbody>
                        </table>
                      </div>
                      <div class="card-footer"></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default{
  data () {
    return {
      todos: [],
    }
  },
    created(){
            this.getTodos();
        },
        methods: {
           async getTodos(){
               await axios.get('http://127.0.0.1:8000/api/todo/').then(response => {
                    this.todos = response.data;
                }).catch(error => {
                    console.log(error);
                });

           },
           async deleteTodo(id){
                await axios.delete('http://127.0.0.1:8000/api/todo/'+id)
                .then(response =>{
                    this.getTodos();
                });
            }
        }
  }
</script>
<style scoped>
.card-header {
  
    background-color: rgb(255 255 255);
  
}
.card-footer {

    background-color: rgb(255 255 255);
}
    .card-title {
        float: left;
        font-size: 1.1rem;
        font-weight: 400;
        margin: 0;
    }
    .card {
        box-shadow: 0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2);
        margin-bottom: 1rem;
    }
    .card-success.card-outline {
    border-top: 3px solid #28a745;
}
</style>