const db = require("../../models");
const EntrevistadoAutorizado = db.entrevistadosAutorizados;

validaCamposRequeridosEntrevistadoAutorizado = (req) => {
    const camposRequeridosEmpty = new Array();
    if (!req.body.idUsuario) {
        camposRequeridosEmpty.push("idUsuario");
    }
    if (!req.body.tipoPermissao) {
        camposRequeridosEmpty.push("tipoPermissao");
    }
    return camposRequeridosEmpty;
}

// Cria e salva um novo documento para a entidade EntrevistadoAutorizado
exports.create = (req, res) => {
    // Validate request
    if (!req.body.idUsuario) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosEntrevistadoAutorizado(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    // Create a EntrevistadoAutorizado
    const entrevistadoAutorizado = new EntrevistadoAutorizado({
        idUsuario: req.body.idUsuario ? req.body.idUsuario.id : null,
        tipoPermissao: req.body.tipoPermissao ? req.body.tipoPermissao : null,
    });

    // Save EntrevistadoAutorizado in the database
    entrevistadoAutorizado
        .save(entrevistadoAutorizado)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ocorreu um erro de servidor ao tentar salvar EntrevistadoAutorizado."
            });
        });
};

// Procura por todas as entidades do tipo EntrevistadoAutorizado
exports.findAll = (req, res) => {
    var condition = {};

    EntrevistadoAutorizado.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao buscar EntrevistadoAutorizado."
        });
      });
};

// Busca a entidade EntrevistadoAutorizado por id
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    EntrevistadoAutorizado.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "A entidade EntrevistadoAutorizado com id " + id + " não encontrada!" });
        else res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao buscar a entidade EntrevistadoAutorizado com o id " + id + "."
        });
      });
};

// Altera uma entidade EntrevistadoAutorizado
exports.update = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosEntrevistadoAutorizado(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    const id = req.params.id;

    EntrevistadoAutorizado.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade EntrevistadoAutorizado com id ${id} não encontrada, por isso não pode ser atualizada!`
          });
        } else res.send({ message: `A entidade EntrevistadoAutorizado com id ${id} foi alterada com sucesso.` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao alterar a entidade EntrevistadoAutorizado com o id " + id + "."
        });
      });
};

// Remove a entidade EntrevistadoAutorizado por id
exports.delete = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    EntrevistadoAutorizado.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade EntrevistadoAutorizado com id ${id} não encontrada, por isso não pode ser excluida!`
          });
        } else {
          res.send({
            message: `A entidade EntrevistadoAutorizado com id ${id} foi excluída com sucesso.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao excluir a entidade EntrevistadoAutorizado com o id " + id + "."
        });
      });
};

// Exclui todos os registros da entidade EntrevistadoAutorizado
exports.deleteAll = (req, res) => {

    EntrevistadoAutorizado.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} ${data.deletedCount > 1 ? 'EntrevistadosAutorizados' : 'EntrevistadoAutorizado'}  foram excluídas!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao excluir todas as entidades EntrevistadoAutorizado."
        });
      });
};
