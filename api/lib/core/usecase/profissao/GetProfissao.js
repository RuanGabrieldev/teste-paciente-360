"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetProfissao {
    constructor(profissaoRepository) {
        this.profissaoRepository = profissaoRepository;
    }
    execute(id) {
        return this.profissaoRepository.getProfissao(id);
    }
}
exports.default = GetProfissao;
