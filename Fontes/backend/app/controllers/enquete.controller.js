const db = require("../../models");
const Enquete = db.enquetes;

validaCamposRequeridosEnquete = (req) => {
    const camposRequeridosEmpty = new Array();
    if (!req.body.nome) {
        camposRequeridosEmpty.push("nome");
    }
    if (!req.body.ativa) {
        camposRequeridosEmpty.push("ativa");
    }
    if (!req.body.dataHoraInicio) {
        camposRequeridosEmpty.push("dataHoraInicio");
    }
    if (!req.body.dataHoraFinal) {
        camposRequeridosEmpty.push("dataHoraFinal");
    }
    if (!req.body.pergunta) {
        camposRequeridosEmpty.push("pergunta");
    }
    if (!req.body.entrevistadorInsereResposta) {
        camposRequeridosEmpty.push("entrevistadorInsereResposta");
    }
    if (!req.body.entrevistadoInsereResposta) {
        camposRequeridosEmpty.push("entrevistadoInsereResposta");
    }
    if (!req.body.entrevistadorAutorizado) {
        camposRequeridosEmpty.push("entrevistadorAutorizado");
    }
    if (!req.body.entrevistadoAutorizado) {
        camposRequeridosEmpty.push("entrevistadoAutorizado");
    }
    return camposRequeridosEmpty;
}

// Cria e salva um novo documento para a entidade Enquete
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosEnquete(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    // Create a Enquete
    const enquete = new Enquete({
        nome: req.body.nome ? req.body.nome : null,
        ativa: req.body.ativa ? req.body.ativa : null,
        dataHoraInicio: req.body.dataHoraInicio ? req.body.dataHoraInicio : null,
        dataHoraFinal: req.body.dataHoraFinal ? req.body.dataHoraFinal : null,
        pergunta: req.body.pergunta ? req.body.pergunta.id : null,
        entrevistadorInsereResposta: req.body.entrevistadorInsereResposta ? req.body.entrevistadorInsereResposta : null,
        entrevistadoInsereResposta: req.body.entrevistadoInsereResposta ? req.body.entrevistadoInsereResposta : null,
        entrevistadorAutorizado: req.body.entrevistadorAutorizado ? req.body.entrevistadorAutorizado.id : null,
        entrevistadoAutorizado: req.body.entrevistadoAutorizado ? req.body.entrevistadoAutorizado.id : null
    });

    // Save Enquete in the database
    enquete
        .save(enquete)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ocorreu um erro de servidor ao tentar salvar Enquete."
            });
        });
};

// Procura por todas as entidades do tipo Enquete
exports.findAll = (req, res) => {
    var condition = {};

    const nome = req.query.nome;
    if (nome) {
        condition.nome = { $regex: new RegExp(nome), $options: "i" };
    }

    Enquete.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao buscar Enquete."
        });
      });
};

// Busca a entidade Enquete por id
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    Enquete.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "A entidade Enquete com id " + id + " não encontrada!" });
        else res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao buscar a entidade Enquete com o id " + id + "."
        });
      });
};

// Altera uma entidade Enquete
exports.update = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosEnquete(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    const id = req.params.id;

    Enquete.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade Enquete com id ${id} não encontrada, por isso não pode ser atualizada!`
          });
        } else res.send({ message: `A entidade Enquete com id ${id} foi alterada com sucesso.` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao alterar a entidade Enquete com o id " + id + "."
        });
      });
};

// Remove a entidade Enquete por id
exports.delete = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    Enquete.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade Enquete com id ${id} não encontrada, por isso não pode ser excluida!`
          });
        } else {
          res.send({
            message: `A entidade Enquete com id ${id} foi excluída com sucesso.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao excluir a entidade Enquete com o id " + id + "."
        });
      });
};

// Exclui todos os registros da entidade Enquete
exports.deleteAll = (req, res) => {

    Enquete.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} ${data.deletedCount > 1 ? 'Enquetes' : 'Enquete'}  foram excluídas!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao excluir todas as entidades Enquete."
        });
      });
};

// Procura por entidade Enquete onde o campo booleano ativa seja true
exports.findAllAtiva = (req, res) => {

    Enquete.find({ ativa: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao buscar Enquete por ativa true."
        });
      });
};

// Procura por entidade Enquete onde o campo booleano entrevistadorInsereResposta seja true
exports.findAllEntrevistadorInsereResposta = (req, res) => {

    Enquete.find({ entrevistadorInsereResposta: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao buscar Enquete por entrevistadorInsereResposta true."
        });
      });
};

// Procura por entidade Enquete onde o campo booleano entrevistadoInsereResposta seja true
exports.findAllEntrevistadoInsereResposta = (req, res) => {

    Enquete.find({ entrevistadoInsereResposta: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao buscar Enquete por entrevistadoInsereResposta true."
        });
      });
};
