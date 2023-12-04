"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteProfissional {
    constructor(profissionalRepository) {
        this.profissionalRepository = profissionalRepository;
    }
    execute(id) {
        return this.profissionalRepository.deleteProfissional(Number.parseInt(id));
    }
}
exports.default = DeleteProfissional;
