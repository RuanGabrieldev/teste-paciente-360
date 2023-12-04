"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetProfissionais {
    constructor(profissionalRepository) {
        this.profissionalRepository = profissionalRepository;
    }
    execute(params) {
        return this.profissionalRepository.getProfissionais(params);
    }
}
exports.default = GetProfissionais;
