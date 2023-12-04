"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Getprofissional {
    constructor(profissionalRepository) {
        this.profissionalRepository = profissionalRepository;
    }
    execute(id) {
        return this.profissionalRepository.getProfissional(id);
    }
}
exports.default = Getprofissional;
