<template>
    <Formulario
        titulo="Cadastrar cliente"
        :cliente="cliente"
        @cliente="addCliente($event)"
        :mensagem="mensagem"
        :formDisabled="formDisabled"
    />
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
            cliente: {
                tipo: 'FISICA',
                cpf: '',
                sexo: 'Feminino',
                nascimento: '',
                cnpj: '',
                razao_social: '',
                nome: '',
                email: '',
                telefone: '',
                celular: '',
                enderecos: [],
            },
            mensagem: '',
            formDisabled: false,
        };
    },
    methods: {
        async addCliente(cliente) {
            this.formDisabled = true;
            this.mensagem = 'Salvando as informações...';
            const response = await Cliente.salvarCliente(cliente);
            this.formDisabled = false;
            this.mensagem = '';
            if (response.status === 200) {
                alert('Cliente salvo com sucesso!');
                this.$router.push('/desafio-medprev/clientes');
            } else {
                alert('Ocorreu um erro! Os dados não foram salvos');
            }
        },
    },
};
</script>
