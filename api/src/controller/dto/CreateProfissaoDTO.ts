import { z } from "zod";
import Profissao from "../../core/entity/Profissao";

const validate = (data: any) => {
    
    const obj = z.object({

    nome: z.string({required_error: "O Nome é obrigatório", invalid_type_error: "Nome deve ser uma String",})
      .min(2, { message: "Nome deve possuir pelo menos 2 caracteres" }),
  })
  const result = obj.parse(data)

  return new Profissao(result.nome)

}; 

export default {
    validate
}

