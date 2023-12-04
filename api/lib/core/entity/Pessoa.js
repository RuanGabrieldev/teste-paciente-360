"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, dataNascimento, cpf, telefone, observacoes, profissao, id = null) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.telefone = telefone;
        this.observacoes = observacoes;
        this.profissao = profissao;
        this.id = id;
    }
}
exports.default = Pessoa;
