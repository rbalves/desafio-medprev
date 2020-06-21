<template>
    <div class="container-fluid mt-2">
        <div class="row">
            <div class="col">
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">
                            Clientes
                            <router-link to="/desafio-medprev/clientes/cadastro" class="btn btn-success btn-sm">
                                <span class="fa fa-plus"></span> Novo
                            </router-link>
                        </h3>
                    </div>
                    <div class="card m-2" v-if="clientes.length == 0">
                        <div class="card-body text-center">
                            {{ mensagem }}
                        </div>
                    </div>
                    <div class="box-body table-responsive" v-if="clientes.length > 0">
                        <table class="table table-hover table-sm">
                            <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                    <th>Celular</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="cliente in clientes"
                                    :key="cliente._id"
                                >
                                    <td>{{ cliente.tipo }}</td>
                                    <td>{{ cliente.nome }}</td>
                                    <td>{{ cliente.email }}</td>
                                    <td>{{ cliente.telefone }}</td>
                                    <td>{{ cliente.celular }}</td>
                                    <td>
                                        <div class="btn-group" role="group">
                                            <button
                                                type="button"
                                                class="btn btn-primary"
                                                @click="editarCliente(cliente._id)"
                                            >
                                                <span class="fa fa-edit"></span>
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-danger"
                                                @click="deletarCliente(cliente)"
                                            >
                                                <span class="fa fa-trash"></span>
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-info"
                                                data-toggle="modal"
                                                data-target="#modal_cliente"
                                                @click="verCliente(cliente)"
                                            >
                                                <span class="fa fa-eye"></span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="box-footer clear-fix">
                        <ul class="pagination justify-content-end" v-if="clientes.length > 0">
                            <li class="page-item">
                                <a
                                    class="page-link"
                                    type="button"
                                    @click.prevent="paginaAnterior()"
                                    :class="{disabled: anteriorDisabled}"
                                >Anterior</a>
                            </li>
                            <li class="page-item">
                                <a
                                    class="page-link"
                                    type="button"
                                    @click.prevent="proximaPagina()"
                                    :class="{disabled: proximaDisabled}"
                                >Próximo</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="modal fade bd-example-modal-lg"
            id="modal_cliente"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-backdrop="static"
            data-keyword="false"
            ref="modal"
        >
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Detalhes</h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col">
                                <label>Tipo: </label> {{ cliente ? cliente.tipo : '' }}
                            </div>
                        </div>
                        <div class="row" v-if="cliente ? cliente.tipo === 'FISICA' : false">
                            <div class="col">
                                <label>CPF: </label> {{ cliente ? cliente.cpf : '' }}
                            </div>
                            <div class="col-3">
                                <label>Sexo: </label> {{ cliente ? cliente.sexo : '' }}
                            </div>
                            <div class="col-5">
                                <label>Data de nascimento: </label> {{ cliente ? cliente.nascimento : '' }}
                            </div>
                        </div>
                        <div class="row" v-if="cliente ? cliente.tipo === 'JURIDICA' : false">
                            <div class="col">
                                <label>CNPJ: </label> {{ cliente ? cliente.cnpj : '' }}
                            </div>
                            <div class="col">
                                <label>Razão social: </label> {{ cliente ? cliente.razao_social : '' }}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label>Nome: </label> {{ cliente ? cliente.nome : '' }}
                            </div>
                            <div class="col">
                                <label>E-mail: </label> {{ cliente ? cliente.email : '' }}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label>Telefone: </label> {{ cliente ? cliente.telefone : '' }}
                            </div>
                            <div class="col">
                                <label>Celular: </label> {{ cliente ? cliente.celular : '' }}
                            </div>
                        </div>
                        <div class="card" v-if="cliente ? cliente.enderecos.length == 0 : false">
                            <div class="card-body text-center">
                                Nenhuma endereço adicionado.
                            </div>
                        </div>
                        <div class="table-responsive" v-if="cliente ? cliente.enderecos.length > 0 : false">
                            <table class="table table-hover table-sm">
                                <thead>
                                    <tr>
                                        <th>Endereço</th>
                                        <th>Número</th>
                                        <th>Complemento</th>
                                        <th>Bairro</th>
                                        <th>Cidade</th>
                                        <th>Estado</th>
                                        <th>CEP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="endereco in cliente.enderecos"
                                        :key="endereco.id"
                                    >
                                        <td>{{ endereco.rua }}</td>
                                        <td>{{ endereco.numero }}</td>
                                        <td>{{ endereco.complemento }}</td>
                                        <td>{{ endereco.bairro }}</td>
                                        <td>{{ endereco.cidade }}</td>
                                        <td>{{ endereco.estado }}</td>
                                        <td>{{ endereco.cep }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cliente from '../../api/clientes';

export default {
    data() {
        return {
            mensagem: '',
            skip: 0,
            clientes: [],
            anteriorDisabled: true,
            proximaDisabled: false,
            cliente: null,
        };
    },
    created() {
        this.getClientes();
    },
    watch: {
        skip() {
            this.anteriorDisabled = this.skip === 0;
        },
    },
    methods: {
        async getClientes() {
            this.clientes = [];
            this.mensagem = 'Buscando clientes...';
            const response = await Cliente.getClientes(this.skip);
            this.clientes = response.data;
            if (this.clientes.length === 0) {
                if (this.skip === 0) {
                    this.mensagem = 'Nenhum cliente encontrado.';
                } else {
                    this.paginaAnterior();
                }
            }

            this.proximaDisabled = this.clientes.length < 5;
        },
        proximaPagina() {
            if (this.clientes.length >= 5) {
                this.skip += 5;
                this.getClientes();
            }
        },
        paginaAnterior() {
            if (this.skip >= 5) {
                this.skip -= 5;
                this.getClientes();
            } else {
                this.anteriorDisabled = true;
            }
        },
        async deletarCliente(cliente) {
            /* eslint-disable */
            if (window.confirm(`Desejar deletar o cliente ${cliente.nome}?`)) {
                const response = await Cliente.deletarCliente(cliente._id);
                if (response.status === 200) {
                    this.getClientes();
                    alert('Cliente removido com sucesso!');
                }
            }
        },
        editarCliente(id) {
            this.$router.push(`/desafio-medprev/clientes/editar/${id}`);
        },
        verCliente(cliente) {
            this.cliente = { ...cliente };
            if (this.cliente.nascimento.includes('-')) {
                const [ano, mes, dia] = this.cliente.nascimento.split('-');
                this.cliente.nascimento = `${dia}/${mes}/${ano}`;
            }
        },
    },
};
</script>

<style scoped>
.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
