var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      resposta: String,
        pergunta: {type: Schema.Types.ObjectId, ref: 'Pergunta'}, 
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const RespostaPergunta = mongoose.model("respostaPergunta", schema);
  return RespostaPergunta;
};
