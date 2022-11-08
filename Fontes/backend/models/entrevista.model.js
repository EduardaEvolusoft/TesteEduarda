var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nome: String,
      dataHora: Date,
      sequencia: Number,
        entrevistador: {type: Schema.Types.ObjectId, ref: 'Usuario'}, 
        entrevistado: {type: Schema.Types.ObjectId, ref: 'Usuario'}, 
        enquete: {type: Schema.Types.ObjectId, ref: 'Enquete'}, 
        resposta: {type: Schema.Types.ObjectId, ref: 'RespostaPergunta'}, 
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Entrevista = mongoose.model("entrevista", schema);
  return Entrevista;
};
