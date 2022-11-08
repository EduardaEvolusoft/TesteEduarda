var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nome: String,
      ativa: Boolean,
      dataHoraInicio: Date,
      dataHoraFinal: Date,
        pergunta: {type: Schema.Types.ObjectId, ref: 'Pergunta'}, 
      entrevistadorInsereResposta: Boolean,
      entrevistadoInsereResposta: Boolean,
        entrevistadorAutorizado: {type: Schema.Types.ObjectId, ref: 'EntrevistadorAutorizado'}, 
        entrevistadoAutorizado: {type: Schema.Types.ObjectId, ref: 'EntrevistadoAutorizado'}, 
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Enquete = mongoose.model("enquete", schema);
  return Enquete;
};
