<template>
    <div class="container-fluid mt-2">
        <div class="row">
            <div class="col">
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">
                            {{ titulo }}
                        </h3>
                    </div>
                    <form @submit.prevent="submit">
                        <fieldset :disabled="formDisabled">
                        <div class="box-body">
                            <div class="row">
                                <div class="form-group col-12">
                                    <div class="form-check-inline">
                                        <label class="form-check-label">
                                            TIPO:
                                        </label>
                                    </div>
                                    <div class="form-check-inline">
                                        <label class="form-check-label">
                                            <input
                                                type="radio"
                                                class="form-check-input"
                                                name="tipo"
                                                id="fisica"
                                                value="FISICA"
                                                v-model="cliente.tipo"
                                                @click="alterarTipo('FISICA')"
                                                checked
                                            > FISICA
                                        </label>
                                    </div>
                                    <div class="form-check-inline">
                                        <label class="form-check-label">
                                            <input
                                                type="radio"
                                                class="form-check-input"
                                                name="tipo"
                                                id="juridica"
                                                value="JURIDICA"
                                                v-model="cliente.tipo"
                                                @click="alterarTipo('JURIDICA')"
                                            > JURIDICA
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group col-6" v-if="!ehFisica">
                                    <label for="input-cnpj">CNPJ</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="input-cnpj"
                                        id="input-cnpj"
                                        required
                                        v-model="cliente.cnpj"
                                        v-model.trim="$v.cliente.cnpj.$model"
                                        v-mask="'##.###.###/####-##'"
                                    >
                                    <div
                                        v-if="!$v.cliente.cnpj.required"
                                    >
                                        <strong style="color: red;">CNPJ é obrigatório!</strong>
                                    </div>
                                    <div
                                        v-if="!$v.cliente.cnpj.minLength"
                                    >
                                        <strong style="color: red;">CNPJ incompleto!</strong>
                                    </div>
                                </div>
                                <div class="form-group col-6" v-if="!ehFisica">
                                    <label for="input-rs">Razão social</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="input-rs"
                                        id="input-rs"
                                        required
                                        v-model="cliente.razao_social"
                                        v-model.trim="$v.cliente.razao_social.$model"

                                    >
                                    <div
                                        v-if="!$v.cliente.razao_social.required"
                                    >
                                        <strong style="color: red;">Razão social é obrigatória!</strong>
                                    </div>
                                </div>
                                <div
                                    class="form-group col-4"
                                    v-if="ehFisica"
                                >
                                    <label for="input-cpf">CPF</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="input-cpf"
                                        id="input-cpf"
                                        v-model="cliente.cpf"
                                        v-model.trim="$v.cliente.cpf.$model"
                                        v-mask="'###.###.###-##'"
                                        required
                                    >
                                    <div
                                        v-if="!$v.cliente.cpf.required"
                                    >
                                        <strong style="color: red;">CPF é obrigatório!</strong>
                                    </div>
                                    <div
                                        v-if="!$v.cliente.cpf.minLength"
                                    >
                                        <strong style="color: red;">CPF incompleto!</strong>
                                    </div>
                                </div>
                                <div class="form-group col-4" v-if="ehFisica">
                                    <label for="select-sexo">Sexo</label>
                                    <select
                                        name="select-sexo"
                                        id="select-sexo"
                                        class="form-control"
                                        required
                                        v-model="cliente.sexo"
                                    >
                                        <option>Feminino</option>
                                        <option>Masculino</option>
                                        <option>Prefiro não informar</option>
                                    </select>
                                </div>
                                <div class="form-group col-4" v-if="ehFisica">
                                    <label for="input-nascimento">Data de nascimento</label>
                                    <input
                                        type="date"
                                        class="form-control"
                                        name="input-nascimento"
                                        id="input-nascimento"
                                        required
                                        v-model="cliente.nascimento"
                                        v-model.trim="$v.cliente.nascimento.$model"
                                    >
                                    <div
                                        v-if="!$v.cliente.nascimento.required"
                                    >
                                        <strong style="color: red;">Data de Nascimento é obrigatória!</strong>
                                    </div>
                                </div>
                                <div class="form-group col-6">
                                    <label for="input-nome">Nome</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="input-nome"
                                        id="input-nome"
                                        required
                                        v-model="cliente.nome"
                                        v-model.trim="$v.cliente.nome.$model"
                                    >
                                    <div
                                        v-if="!$v.cliente.nome.required"
                                    >
                                        <strong style="color: red;">Nome é obrigatório!</strong>
                                    </div>
                                </div>
                                <div class="form-group col-6">
                                    <label for="input-email">Email</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        name="input-email"
                                        id="input-email"
                                        v-model="cliente.email"
                                    >
                                </div>
                                <div class="form-group col-6">
                                    <label for="input-telefone">Telefone</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="input-telefone"
                                        id="input-telefone"
                                        v-model="cliente.telefone"
                                        v-mask="'(##) ####-####'"
                                    >
                                </div>
                                <div class="form-group col-6">
                                    <label for="input-celular">Celular</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="input-celular"
                                        id="input-celular"
                                        v-model="cliente.celular"
                                        v-mask="'(##) ####-####'"
                                    >
                                </div>
                                <div class="form-group col-12">
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-sm mb-2"
                                        data-toggle="modal"
                                        data-target="#form_endereco"
                                    >
                                        Adicionar endereço
                                    </button>

                                    <div class="card" v-if="cliente.enderecos.length == 0">
                                        <div class="card-body text-center">
                                            Nenhuma endereço adicionado.
                                        </div>
                                    </div>

                                    <div class="table-responsive" v-if="cliente.enderecos.length > 0">
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
                                                    <th>Ações</th>
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
                                                    <td>
                                                        <div class="btn-group" role="group">
                                                            <button
                                                                type="button"
                                                                class="btn btn-info"
                                                                data-toggle="modal"
                                                                data-target="#form_endereco"
                                                                @click="editarEndereco(endereco)"
                                                            >
                                                                <span class="fa fa-edit"></span>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                class="btn btn-danger"
                                                                @click="removerEndereco(endereco)"
                                                            >
                                                                <span class="fa fa-trash"></span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-footer">
                            <button type="submit" class="btn btn-success m-1">Salvar</button>
                            <router-link to="/clientes" class="btn btn-danger m1">
                                Cancelar
                            </router-link>
                            <span class="ml-2" v-if="mensagem">{{ mensagem }}</span>
                        </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

        <div
            class="modal fade bd-example-modal-lg"
            id="form_endereco"
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
                    <h5 class="modal-title" id="exampleModalLabel">Endereço</h5>
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
                        <div class="form-group col-8">
                            <label for="input-endereco">Rua</label>
                            <input
                                type="text"
                                class="form-control"
                                name="input-endereco"
                                id="input-endereco"
                                required
                                v-model="endereco.rua"
                                v-model.trim="$v.endereco.rua.$model"
                            >
                            <div
                                v-if="!$v.endereco.rua.required"
                            >
                                <strong style="color: red;">Rua é obrigatória!</strong>
                            </div>
                        </div>
                        <div class="form-group col-4">
                            <label for="input-numero">Número</label>
                            <input
                                type="number"
                                min="1"
                                class="form-control"
                                name="input-numero"
                                id="input-numero"
                                required
                                v-model="endereco.numero"
                                v-model.trim="$v.endereco.numero.$model"
                            >
                            <div
                                v-if="!$v.endereco.numero.required"
                            >
                                <strong style="color: red;">Número é obrigatório!</strong>
                            </div>
                        </div>
                        <div class="form-group col-8">
                            <label for="input-complemento">Complemento</label>
                            <input
                                type="text"
                                class="form-control"
                                name="input-complemento"
                                id="input-complemento"
                                v-model="endereco.complemento"
                            >
                        </div>
                        <div class="form-group col-4">
                            <label for="input-bairro">Bairro</label>
                            <input
                                type="text"
                                class="form-control"
                                name="input-bairro"
                                id="input-bairro"
                                v-model="endereco.bairro"
                            >
                        </div>
                        <div class="form-group col-4">
                            <label for="input-cidade">Cidade</label>
                            <input
                                type="text"
                                class="form-control"
                                name="input-cidade"
                                id="input-cidade"
                                required
                                v-model="endereco.cidade"
                                v-model.trim="$v.endereco.cidade.$model"
                            >
                            <div
                                v-if="!$v.endereco.cidade.required"
                            >
                                <strong style="color: red;">Cidade é obrigatória!</strong>
                            </div>
                        </div>
                        <div class="form-group col-4">
                            <label for="input-estado">Estado</label>
                            <input
                                type="text"
                                class="form-control"
                                name="input-estado"
                                id="input-estado"
                                required
                                v-model="endereco.estado"
                                v-model.trim="$v.endereco.estado.$model"
                            >
                            <div
                                v-if="!$v.endereco.estado.required"
                            >
                                <strong style="color: red;">Estado é obrigatório!</strong>
                            </div>
                        </div>
                        <div class="form-group col-4">
                            <label for="input-cep">CEP</label>
                            <input
                                type="text"
                                class="form-control"
                                name="input-cep"
                                id="input-cep"
                                v-model="endereco.cep"
                                v-mask="'#####-###'"
                            >
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success btn-md" @click="addEndereco()">Salvar</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
    props: [
        'titulo',
        'cliente',
        'mensagem',
        'formDisabled',
    ],
    data() {
        return {
            ehFisica: false,
            endereco: {
                id: 0,
                rua: '',
                numero: '',
                complemento: '',
                bairro: '',
                cidade: '',
                estado: '',
                cep: '',
            },
            indice: null,
        };
    },
    validations: {
        cliente: {
            cpf: {
                required,
                minLength: minLength(14),
            },
            nascimento: {
                required,
            },
            cnpj: {
                required,
                minLength: minLength(18),
            },
            razao_social: {
                required,
            },
            nome: {
                required,
            },
        },
        endereco: {
            rua: {
                required,
            },
            numero: {
                required,
            },
            cidade: {
                required,
            },
            estado: {
                required,
            },
        },
    },
    watch: {
        cliente() {
            this.mudarFormularioTipoPessoa();
        },
    },
    created() {
        this.mudarFormularioTipoPessoa();
        this.endereco.id = this.cliente.enderecos.length;
    },
    methods: {
        alterarTipo(tipo) {
            this.cliente.tipo = tipo;
            this.mudarFormularioTipoPessoa();
        },
        mudarFormularioTipoPessoa() {
            this.ehFisica = this.cliente.tipo === 'FISICA';
        },
        resetModal() {
            this.endereco = {
                id: 0,
                rua: '',
                numero: '',
                complemento: '',
                bairro: '',
                cidade: '',
                estado: '',
                cep: '',
            };

            $(this.$refs.modal).modal('hide');
        },
        addEndereco() {
            if (!this.$v.endereco.$invalid) {
                if (this.endereco.id === 0) {
                    this.endereco.id = this.cliente.enderecos.length + 1;
                    this.cliente.enderecos.push(this.endereco);
                } else {
                    this.cliente.enderecos[this.indice] = this.endereco;
                }
                this.resetModal();
            } else {
                /* eslint-disable */
                alert('Preencha todos os campos obrigatórios!')
            }
        },
        editarEndereco(endereco) {
            this.indice = this.cliente.enderecos.indexOf(endereco);
            this.endereco = { ...endereco };
        },
        removerEndereco(endereco) {
            const indice = this.cliente.enderecos.indexOf(endereco);
            this.cliente.enderecos.splice(indice, 1);
        },
        submit() {
            let formValido = false;
            if (this.ehFisica) {
                formValido = !this.$v.cliente.cpf.$invalid && !this.$v.cliente.nascimento.$invalid;
            } else {
                formValido = !this.$v.cliente.cnpj.$invalid && !this.$v.cliente.razao_social.$invalid;
            }
            if (formValido) {
                if (this.cliente.enderecos.length > 0) {
                    if (this.cliente.nascimento.includes('/')) {
                        const [dia, mes, ano] = this.cliente.nascimento.split('/');
                        this.cliente.nascimento = `${ano}-${mes}-${dia}`;
                    }
                    this.$emit('cliente', this.cliente);
                } else {
                    /* eslint-disable */
                    alert('É preciso cadastrar pelo menos um endereço!');
                }
            } else {
                /* eslint-disable */
                alert('Corrija os campos inválidos!');
            }
        },
    },
};
</script>
