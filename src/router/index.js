import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import ClientesLista from '../views/clientes/Lista.vue';
import ClientesCadastro from '../views/clientes/Cadastro.vue';
import ClientesEditar from '../views/clientes/Editar.vue';
import Notfound from '../views/Notfound.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/desafio-medprev/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/desafio-medprev/clientes',
            name: 'ClientesLista',
            component: ClientesLista,
        },
        {
            path: '/desafio-medprev/clientes/cadastro',
            name: 'ClientesCadastro',
            component: ClientesCadastro,
        },
        {
            path: '/desafio-medprev/clientes/editar/:id',
            name: 'ClientesEditar',
            component: ClientesEditar,
        },
        {
            path: '*',
            name: 'Not found',
            component: Notfound,
        },
    ],
});
