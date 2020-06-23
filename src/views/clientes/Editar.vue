<template>
    <div>
        <div class="card m-2" v-if="!cliente">
            <div class="card-body text-center">
                Buscando informações do cliente...
            </div>
        </div>
        <Formulario
            v-if="cliente"
            titulo="Editar cliente"
            :cliente="cliente"
            @cliente="atualizarCliente($event)"
            :mensagem="mensagem"
            :formDisabled="formDisabled"
        />
    </div>
</template>

<script>
import Formulario from '../../components/clientes/Formulario.vue';
import Cliente from '../../api/clientes';

export default {
    components: {
        Formulario,
    },
    data() {
        return {
            cliente: null,
            mensagem: '',
            formDisabled: false,
        };
    },
    created() {
        this.getCliente();
    },
    methods: {
        async getCliente() {
            const { id } = { ...this.$route.params };
            const response = await Cliente.getCliente(id);
            if (response.status === 200) {
                this.cliente = response.data;
            }
        },
        async atualizarCliente(cliente) {
            this.formDisabled = true;
            this.mensagem = 'Atualizando as informações...';
            const { id } = { ...this.$route.params };
            const response = await Cliente.atualizarCliente(id, cliente);
            this.formDisabled = false;
            this.mensagem = '';
            if (response.status === 200) {
                alert('Cliente atualizado com sucesso!');
            } else {
                alert('Ocorreu um erro! Os dados não foram atualizados!');
            }
        },
    },
};
</script>
