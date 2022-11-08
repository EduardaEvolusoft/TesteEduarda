const db = require("../../models");
const PerfilUsuario = db.perfilsUsuarios;

validaCamposRequeridosPerfilUsuario = (req) => {
    const camposRequeridosEmpty = new Array();
    if (!req.body.tipo) {
        camposRequeridosEmpty.push("tipo");
    }
    return camposRequeridosEmpty;
}

// Cria e salva um novo documento para a entidade PerfilUsuario
exports.create = (req, res) => {
    // Validate request
    if (!req.body.tipo) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosPerfilUsuario(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    // Create a PerfilUsuario
    const perfilUsuario = new PerfilUsuario({
        tipo: req.body.tipo ? req.body.tipo : null,
    });

    // Save PerfilUsuario in the database
    perfilUsuario
        .save(perfilUsuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ocorreu um erro de servidor ao tentar salvar PerfilUsuario."
            });
        });
};

// Procura por todas as entidades do tipo PerfilUsuario
exports.findAll = (req, res) => {
    var condition = {};

    const tipo = req.query.tipo;
    if (tipo) {
        condition.tipo = { $regex: new RegExp(tipo), $options: "i" };
    }

    PerfilUsuario.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao buscar PerfilUsuario."
        });
      });
};

// Busca a entidade PerfilUsuario por id
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    PerfilUsuario.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "A entidade PerfilUsuario com id " + id + " não encontrada!" });
        else res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao buscar a entidade PerfilUsuario com o id " + id + "."
        });
      });
};

// Altera uma entidade PerfilUsuario
exports.update = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosPerfilUsuario(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    const id = req.params.id;

    PerfilUsuario.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade PerfilUsuario com id ${id} não encontrada, por isso não pode ser atualizada!`
          });
        } else res.send({ message: `A entidade PerfilUsuario com id ${id} foi alterada com sucesso.` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao alterar a entidade PerfilUsuario com o id " + id + "."
        });
      });
};

// Remove a entidade PerfilUsuario por id
exports.delete = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    PerfilUsuario.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade PerfilUsuario com id ${id} não encontrada, por isso não pode ser excluida!`
          });
        } else {
          res.send({
            message: `A entidade PerfilUsuario com id ${id} foi excluída com sucesso.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao excluir a entidade PerfilUsuario com o id " + id + "."
        });
      });
};

// Exclui todos os registros da entidade PerfilUsuario
exports.deleteAll = (req, res) => {

    PerfilUsuario.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} ${data.deletedCount > 1 ? 'PerfilsUsuarios' : 'PerfilUsuario'}  foram excluídas!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao excluir todas as entidades PerfilUsuario."
        });
      });
};
