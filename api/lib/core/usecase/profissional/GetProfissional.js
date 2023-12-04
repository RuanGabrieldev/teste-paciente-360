"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetProfissional {
    constructor(profissionalRepository) {
        this.profissionalRepository = profissionalRepository;
    }
    execute(id) {
        return this.profissionalRepository.getProfissional(id);
    }
}
exports.default = GetProfissional;
