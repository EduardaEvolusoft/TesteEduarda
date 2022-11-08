const db = require("../../models");
const RespostaPergunta = db.respostasPerguntas;

validaCamposRequeridosRespostaPergunta = (req) => {
    const camposRequeridosEmpty = new Array();
    if (!req.body.resposta) {
        camposRequeridosEmpty.push("resposta");
    }
    if (!req.body.pergunta) {
        camposRequeridosEmpty.push("pergunta");
    }
    return camposRequeridosEmpty;
}

// Cria e salva um novo documento para a entidade RespostaPergunta
exports.create = (req, res) => {
    // Validate request
    if (!req.body.resposta) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosRespostaPergunta(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    // Create a RespostaPergunta
    const respostaPergunta = new RespostaPergunta({
        resposta: req.body.resposta ? req.body.resposta : null,
        pergunta: req.body.pergunta ? req.body.pergunta.id : null
    });

    // Save RespostaPergunta in the database
    respostaPergunta
        .save(respostaPergunta)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ocorreu um erro de servidor ao tentar salvar RespostaPergunta."
            });
        });
};

// Procura por todas as entidades do tipo RespostaPergunta
exports.findAll = (req, res) => {
    var condition = {};

    RespostaPergunta.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao buscar RespostaPergunta."
        });
      });
};

// Busca a entidade RespostaPergunta por id
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    RespostaPergunta.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "A entidade RespostaPergunta com id " + id + " não encontrada!" });
        else res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao buscar a entidade RespostaPergunta com o id " + id + "."
        });
      });
};

// Altera uma entidade RespostaPergunta
exports.update = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosRespostaPergunta(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    const id = req.params.id;

    RespostaPergunta.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade RespostaPergunta com id ${id} não encontrada, por isso não pode ser atualizada!`
          });
        } else res.send({ message: `A entidade RespostaPergunta com id ${id} foi alterada com sucesso.` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao alterar a entidade RespostaPergunta com o id " + id + "."
        });
      });
};

// Remove a entidade RespostaPergunta por id
exports.delete = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    RespostaPergunta.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade RespostaPergunta com id ${id} não encontrada, por isso não pode ser excluida!`
          });
        } else {
          res.send({
            message: `A entidade RespostaPergunta com id ${id} foi excluída com sucesso.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao excluir a entidade RespostaPergunta com o id " + id + "."
        });
      });
};

// Exclui todos os registros da entidade RespostaPergunta
exports.deleteAll = (req, res) => {

    RespostaPergunta.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} ${data.deletedCount > 1 ? 'RespostasPerguntas' : 'RespostaPergunta'}  foram excluídas!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao excluir todas as entidades RespostaPergunta."
        });
      });
};
