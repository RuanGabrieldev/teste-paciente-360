import { z } from "zod";
import Pessoa from "../../core/entity/Pessoa";
import moment from "moment";

const validate = (data: any) => {
    
    const obj = z.object({

    nome: z.string({required_error: "O Nome é obrigatório", invalid_type_error: "Nome deve ser uma String",})
      .min(2, { message: "Nome deve possuir pelo menos 2 caracteres" }),
    
    telefone: z.string({invalid_type_error: "Telefone deve ser uma String",})
      .min(11, { message: "Telefone deve possuir pelo menos 11 caracteres" }).max(14, { message: "Telefone deve possuir no máximo 14 caracteres" }).optional().nullable(),
    
    cpf: z.string({required_error: "O CPF é obrigatório", invalid_type_error: "CPF deve ser uma String",})
      .min(11, { message: "CPF deve possuir pelo menos 11 caracteres" }).max(14, { message: "CPF deve possuir no máximo 14 caracteres" }),

    dataNascimento: z.string({required_error: "O Data de nascimento é obrigatório", invalid_type_error: "Data de nascimento deve ser uma String em formato de date",})    ,
    observacoes:   z.string({invalid_type_error: "Observação deve ser uma String",}).min(2, { message: "Observação deve possuir pelo menos 2 caracteres" }).optional().nullable(),
    profissao: z.object({
      id: z.number({required_error: "O ID é obrigatório", invalid_type_error: "ID deve ser um number",}),
        nome: z.string({required_error: "O Nome é obrigatório", invalid_type_error: "Nome deve ser uma String",})
        .min(2, { message: "Nome deve possuir pelo menos 2 caracteres" })
    })
  })
  const result = obj.parse(data)

  return new Pessoa(result.nome, moment(result.dataNascimento).toDate(), result.cpf, result.telefone || null, result.observacoes || null, {id: result.profissao.id, nome: result.profissao.nome })

}; 

export default {
    validate
}

