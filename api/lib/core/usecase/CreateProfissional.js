"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateProfissional {
    constructor(profissionalRepository) {
        this.profissionalRepository = profissionalRepository;
    }
    execute(body) {
        return this.profissionalRepository.createProfissional(body);
    }
}
exports.default = CreateProfissional;
