import api from './index';

class Cliente {
    getClientes = (skip) => api.get(`/?limit=5&skip=${skip}`);

    getCliente = (id) => api.get(`/${id}`);

    salvarCliente = (cliente) => api.post('/', cliente);

    atualizarCliente = (id, cliente) => api.put(`/${id}`, cliente);

    deletarCliente = (id) => api.delete(`/${id}`);
}

export default new Cliente();
