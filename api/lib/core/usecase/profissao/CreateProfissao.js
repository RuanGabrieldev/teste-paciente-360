"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateProfissao {
    constructor(profissaoRepository) {
        this.profissaoRepository = profissaoRepository;
    }
    execute(body) {
        return this.profissaoRepository.createProfissao(body);
    }
}
exports.default = CreateProfissao;
