<template>
    <div class="jumbotron jumbotron-fluid text-center m-3" >
        <div class="container">
            <h1 class="display-2">Bem vindo!</h1>
            <h5>Gerencie seus clientes de forma fácil.</h5>
        </div>
        <router-link to="/desafio-medprev/clientes" class="btn btn-success btn-lg">
            <span class="fa fa-users"></span> Ver clientes
        </router-link>
    </div>
</template>

<style scoped>
.jumbotron {
    background-color: #fff;
    border-radius: 5px;
}
</style>
