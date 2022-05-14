<template>
  <div class="about">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <form @submit.prevent="addTodo">
            <div class="card card-default">
                <div class="card-header">
                    <h3 class="card-title">TO-DO Add Information</h3>
                </div>
                <div class="card-body">
                  
                      <div class="form-group">
                        <label for="item_name">Item Name <span class="text-danger">*</span></label>
                        <input v-model="todo.item_name" type="text" class="form-control" id="item_name" placeholder="Enter Item Name">
                        <small id="emailHelp" class="text-danger" v-if="errors.item_name">{{ errors.item_name[0] }}</small>
                      </div>
                      <div class="form-group">
                        <label for="description">Description</label>
                        <textarea v-model="todo.description" rows="5" placeholder="Description" id="description" class="form-control"></textarea>
                        <small id="emailHelp" class="text-danger" v-if="errors.description">{{ errors.description[0] }}</small>
                      
                      </div>
                     </div>
                  <div class="card-footer">
                    <button type="submit" class="btn btn-success">Save</button>
                  </div>
               </div>
             </form>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
// @ is an alias to /srcimport
    import axios from 'axios';
  
    export default{
        data(){
            return{
                  todo:{},
                  errors:{}
                  }
               },
        methods:{
            addTodo(){
                axios.post('http://127.0.0.1:8000/api/todo/', this.todo)
                .then(response =>
                (this.$router.push({name: 'Home'})))
                .catch(err=> {
                    this.errors = err.response.data.errors;
                })

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
    label {
        display: inline-block;
        margin-bottom: 0.5rem;
        font-weight: bold;
    }
    .card {
        box-shadow: 0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2);
        margin-bottom: 1rem;
    }
    .card-success.card-outline {
    border-top: 3px solid #28a745;
}
</style>