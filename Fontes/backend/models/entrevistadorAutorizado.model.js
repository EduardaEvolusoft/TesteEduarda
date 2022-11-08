var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
        idUsuario: {type: Schema.Types.ObjectId, ref: 'Usuario'}, 
      tipoPermissao: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const EntrevistadorAutorizado = mongoose.model("entrevistadorAutorizado", schema);
  return EntrevistadorAutorizado;
};
