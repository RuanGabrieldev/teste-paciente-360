"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetProfissoes {
    constructor(profissaoRepository) {
        this.profissaoRepository = profissaoRepository;
    }
    execute(params) {
        return this.profissaoRepository.getProfissoes(params);
    }
}
exports.default = GetProfissoes;
