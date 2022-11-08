var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nome: String,
      senha: String,
      email: String,
        perfil: {type: Schema.Types.ObjectId, ref: 'PerfilUsuario'}, 
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Usuario = mongoose.model("usuario", schema);
  return Usuario;
};
