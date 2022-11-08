const db = require("../../models");
const Usuario = db.usuarios;

validaCamposRequeridosUsuario = (req) => {
    const camposRequeridosEmpty = new Array();
    if (!req.body.nome) {
        camposRequeridosEmpty.push("nome");
    }
    return camposRequeridosEmpty;
}

// Cria e salva um novo documento para a entidade Usuario
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosUsuario(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    // Create a Usuario
    const usuario = new Usuario({
        nome: req.body.nome ? req.body.nome : null,
        senha: req.body.senha ? req.body.senha : null,
        email: req.body.email ? req.body.email : null,
        perfil: req.body.perfil ? req.body.perfil.id : null
    });

    // Save Usuario in the database
    usuario
        .save(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ocorreu um erro de servidor ao tentar salvar Usuario."
            });
        });
};

// Procura por todas as entidades do tipo Usuario
exports.findAll = (req, res) => {
    var condition = {};

    const nome = req.query.nome;
    if (nome) {
        condition.nome = { $regex: new RegExp(nome), $options: "i" };
    }

    Usuario.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao buscar Usuario."
        });
      });
};

// Busca a entidade Usuario por id
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    Usuario.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "A entidade Usuario com id " + id + " não encontrada!" });
        else res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao buscar a entidade Usuario com o id " + id + "."
        });
      });
};

// Altera uma entidade Usuario
exports.update = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosUsuario(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    const id = req.params.id;

    Usuario.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade Usuario com id ${id} não encontrada, por isso não pode ser atualizada!`
          });
        } else res.send({ message: `A entidade Usuario com id ${id} foi alterada com sucesso.` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao alterar a entidade Usuario com o id " + id + "."
        });
      });
};

// Remove a entidade Usuario por id
exports.delete = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    Usuario.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade Usuario com id ${id} não encontrada, por isso não pode ser excluida!`
          });
        } else {
          res.send({
            message: `A entidade Usuario com id ${id} foi excluída com sucesso.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao excluir a entidade Usuario com o id " + id + "."
        });
      });
};

// Exclui todos os registros da entidade Usuario
exports.deleteAll = (req, res) => {

    Usuario.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} ${data.deletedCount > 1 ? 'Usuarios' : 'Usuario'}  foram excluídas!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao excluir todas as entidades Usuario."
        });
      });
};
