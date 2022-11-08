import { Pergunta } from "./pergunta.model";
import { EntrevistadorAutorizado } from "./entrevistador-autorizado.model";
import { EntrevistadoAutorizado } from "./entrevistado-autorizado.model";

export class Enquete {
    id?: any;
    nome?: string;
    ativa?: boolean;
    dataHoraInicio?: any;
    dataHoraFinal?: any;
    pergunta?: Pergunta;
    entrevistadorInsereResposta?: boolean;
    entrevistadoInsereResposta?: boolean;
    entrevistadorAutorizado?: EntrevistadorAutorizado;
    entrevistadoAutorizado?: EntrevistadoAutorizado;
}

