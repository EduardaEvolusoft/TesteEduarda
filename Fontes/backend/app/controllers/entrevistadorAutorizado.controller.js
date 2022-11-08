const db = require("../../models");
const EntrevistadorAutorizado = db.entrevistadoresAutorizados;

validaCamposRequeridosEntrevistadorAutorizado = (req) => {
    const camposRequeridosEmpty = new Array();
    if (!req.body.idUsuario) {
        camposRequeridosEmpty.push("idUsuario");
    }
    if (!req.body.tipoPermissao) {
        camposRequeridosEmpty.push("tipoPermissao");
    }
    return camposRequeridosEmpty;
}

// Cria e salva um novo documento para a entidade EntrevistadorAutorizado
exports.create = (req, res) => {
    // Validate request
    if (!req.body.idUsuario) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosEntrevistadorAutorizado(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    // Create a EntrevistadorAutorizado
    const entrevistadorAutorizado = new EntrevistadorAutorizado({
        idUsuario: req.body.idUsuario ? req.body.idUsuario.id : null,
        tipoPermissao: req.body.tipoPermissao ? req.body.tipoPermissao : null,
    });

    // Save EntrevistadorAutorizado in the database
    entrevistadorAutorizado
        .save(entrevistadorAutorizado)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ocorreu um erro de servidor ao tentar salvar EntrevistadorAutorizado."
            });
        });
};

// Procura por todas as entidades do tipo EntrevistadorAutorizado
exports.findAll = (req, res) => {
    var condition = {};

    EntrevistadorAutorizado.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao buscar EntrevistadorAutorizado."
        });
      });
};

// Busca a entidade EntrevistadorAutorizado por id
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    EntrevistadorAutorizado.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "A entidade EntrevistadorAutorizado com id " + id + " não encontrada!" });
        else res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao buscar a entidade EntrevistadorAutorizado com o id " + id + "."
        });
      });
};

// Altera uma entidade EntrevistadorAutorizado
exports.update = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosEntrevistadorAutorizado(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    const id = req.params.id;

    EntrevistadorAutorizado.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade EntrevistadorAutorizado com id ${id} não encontrada, por isso não pode ser atualizada!`
          });
        } else res.send({ message: `A entidade EntrevistadorAutorizado com id ${id} foi alterada com sucesso.` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao alterar a entidade EntrevistadorAutorizado com o id " + id + "."
        });
      });
};

// Remove a entidade EntrevistadorAutorizado por id
exports.delete = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    EntrevistadorAutorizado.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade EntrevistadorAutorizado com id ${id} não encontrada, por isso não pode ser excluida!`
          });
        } else {
          res.send({
            message: `A entidade EntrevistadorAutorizado com id ${id} foi excluída com sucesso.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao excluir a entidade EntrevistadorAutorizado com o id " + id + "."
        });
      });
};

// Exclui todos os registros da entidade EntrevistadorAutorizado
exports.deleteAll = (req, res) => {

    EntrevistadorAutorizado.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} ${data.deletedCount > 1 ? 'EntrevistadoresAutorizados' : 'EntrevistadorAutorizado'}  foram excluídas!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao excluir todas as entidades EntrevistadorAutorizado."
        });
      });
};
