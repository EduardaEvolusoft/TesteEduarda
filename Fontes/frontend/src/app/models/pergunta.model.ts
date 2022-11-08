import { TipoResposta } from "./tipo-resposta.model";

export class Pergunta {
    id?: any;
    codigoPergunta?: number;
    sequenciaFormulario?: number;
    frase?: string;
    textoExplicativo?: string;
    tipoResposta?: TipoResposta;
    obrigatoria?: boolean;
}

