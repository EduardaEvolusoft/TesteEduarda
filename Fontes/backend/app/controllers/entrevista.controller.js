const db = require("../../models");
const Entrevista = db.entrevistas;

validaCamposRequeridosEntrevista = (req) => {
    const camposRequeridosEmpty = new Array();
    if (!req.body.nome) {
        camposRequeridosEmpty.push("nome");
    }
    if (!req.body.dataHora) {
        camposRequeridosEmpty.push("dataHora");
    }
    if (!req.body.sequencia) {
        camposRequeridosEmpty.push("sequencia");
    }
    if (!req.body.entrevistador) {
        camposRequeridosEmpty.push("entrevistador");
    }
    if (!req.body.entrevistado) {
        camposRequeridosEmpty.push("entrevistado");
    }
    if (!req.body.enquete) {
        camposRequeridosEmpty.push("enquete");
    }
    if (!req.body.resposta) {
        camposRequeridosEmpty.push("resposta");
    }
    return camposRequeridosEmpty;
}

// Cria e salva um novo documento para a entidade Entrevista
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosEntrevista(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    // Create a Entrevista
    const entrevista = new Entrevista({
        nome: req.body.nome ? req.body.nome : null,
        dataHora: req.body.dataHora ? req.body.dataHora : null,
        sequencia: req.body.sequencia ? req.body.sequencia : null,
        entrevistador: req.body.entrevistador ? req.body.entrevistador.id : null,
        entrevistado: req.body.entrevistado ? req.body.entrevistado.id : null,
        enquete: req.body.enquete ? req.body.enquete.id : null,
        resposta: req.body.resposta ? req.body.resposta.id : null
    });

    // Save Entrevista in the database
    entrevista
        .save(entrevista)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ocorreu um erro de servidor ao tentar salvar Entrevista."
            });
        });
};

// Procura por todas as entidades do tipo Entrevista
exports.findAll = (req, res) => {
    var condition = {};

    Entrevista.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao buscar Entrevista."
        });
      });
};

// Busca a entidade Entrevista por id
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    Entrevista.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "A entidade Entrevista com id " + id + " não encontrada!" });
        else res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao buscar a entidade Entrevista com o id " + id + "."
        });
      });
};

// Altera uma entidade Entrevista
exports.update = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosEntrevista(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    const id = req.params.id;

    Entrevista.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade Entrevista com id ${id} não encontrada, por isso não pode ser atualizada!`
          });
        } else res.send({ message: `A entidade Entrevista com id ${id} foi alterada com sucesso.` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao alterar a entidade Entrevista com o id " + id + "."
        });
      });
};

// Remove a entidade Entrevista por id
exports.delete = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    Entrevista.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade Entrevista com id ${id} não encontrada, por isso não pode ser excluida!`
          });
        } else {
          res.send({
            message: `A entidade Entrevista com id ${id} foi excluída com sucesso.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao excluir a entidade Entrevista com o id " + id + "."
        });
      });
};

// Exclui todos os registros da entidade Entrevista
exports.deleteAll = (req, res) => {

    Entrevista.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} ${data.deletedCount > 1 ? 'Entrevistas' : 'Entrevista'}  foram excluídas!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao excluir todas as entidades Entrevista."
        });
      });
};
