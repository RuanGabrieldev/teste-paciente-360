"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetProfissionais {
    constructor(profissionalRepository) {
        this.profissionalRepository = profissionalRepository;
    }
    execute(body) {
        return this.profissionalRepository.getProfissionais(body);
    }
}
exports.default = GetProfissionais;
