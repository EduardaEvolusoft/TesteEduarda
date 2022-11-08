const db = require("../../models");
const Pergunta = db.perguntas;

validaCamposRequeridosPergunta = (req) => {
    const camposRequeridosEmpty = new Array();
    if (!req.body.frase) {
        camposRequeridosEmpty.push("frase");
    }
    return camposRequeridosEmpty;
}

// Cria e salva um novo documento para a entidade Pergunta
exports.create = (req, res) => {
    // Validate request
    if (!req.body.frase) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosPergunta(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    // Create a Pergunta
    const pergunta = new Pergunta({
        codigoPergunta: req.body.codigoPergunta ? req.body.codigoPergunta : null,
        sequenciaFormulario: req.body.sequenciaFormulario ? req.body.sequenciaFormulario : null,
        frase: req.body.frase ? req.body.frase : null,
        textoExplicativo: req.body.textoExplicativo ? req.body.textoExplicativo : null,
        tipoResposta: req.body.tipoResposta ? req.body.tipoResposta.id : null,
        obrigatoria: req.body.obrigatoria ? req.body.obrigatoria : null,
    });

    // Save Pergunta in the database
    pergunta
        .save(pergunta)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ocorreu um erro de servidor ao tentar salvar Pergunta."
            });
        });
};

// Procura por todas as entidades do tipo Pergunta
exports.findAll = (req, res) => {
    var condition = {};

    const codigoPergunta = req.query.codigoPergunta;
    if (codigoPergunta) {
        condition.codigoPergunta = { $regex: new RegExp(codigoPergunta), $options: "i" };
    }

    Pergunta.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao buscar Pergunta."
        });
      });
};

// Busca a entidade Pergunta por id
exports.findOne = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    Pergunta.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "A entidade Pergunta com id " + id + " não encontrada!" });
        else res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao buscar a entidade Pergunta com o id " + id + "."
        });
      });
};

// Altera uma entidade Pergunta
exports.update = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosPergunta(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    const id = req.params.id;

    Pergunta.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade Pergunta com id ${id} não encontrada, por isso não pode ser atualizada!`
          });
        } else res.send({ message: `A entidade Pergunta com id ${id} foi alterada com sucesso.` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao alterar a entidade Pergunta com o id " + id + "."
        });
      });
};

// Remove a entidade Pergunta por id
exports.delete = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    const id = req.params.id;

    Pergunta.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade Pergunta com id ${id} não encontrada, por isso não pode ser excluida!`
          });
        } else {
          res.send({
            message: `A entidade Pergunta com id ${id} foi excluída com sucesso.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao excluir a entidade Pergunta com o id " + id + "."
        });
      });
};

// Exclui todos os registros da entidade Pergunta
exports.deleteAll = (req, res) => {

    Pergunta.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} ${data.deletedCount > 1 ? 'Perguntas' : 'Pergunta'}  foram excluídas!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao excluir todas as entidades Pergunta."
        });
      });
};

// Procura por entidade Pergunta onde o campo booleano obrigatoria seja true
exports.findAllObrigatoria = (req, res) => {

    Pergunta.find({ obrigatoria: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao buscar Pergunta por obrigatoria true."
        });
      });
};
