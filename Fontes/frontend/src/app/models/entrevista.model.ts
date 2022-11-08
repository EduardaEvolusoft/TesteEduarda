import { Usuario } from "./usuario.model";
import { Enquete } from "./enquete.model";
import { RespostaPergunta } from "./resposta-pergunta.model";

export class Entrevista {
    id?: any;
    nome?: string;
    dataHora?: any;
    sequencia?: number;
    entrevistador?: Usuario;
    entrevistado?: Usuario;
    enquete?: Enquete;
    resposta?: RespostaPergunta;
}

