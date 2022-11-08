var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      codigoPergunta: Number,
      sequenciaFormulario: Number,
      frase: String,
      textoExplicativo: String,
        tipoResposta: {type: Schema.Types.ObjectId, ref: 'TipoResposta'}, 
      obrigatoria: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Pergunta = mongoose.model("pergunta", schema);
  return Pergunta;
};
