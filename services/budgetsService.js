const { where } = require("sequelize");
const { OpcoesBolo, Orcamento, Usuario } = require("../models");

async function selectAllItems() {
    return await OpcoesBolo.findAll();
}

async function selectAllUserBudgets(req) {
    try {
        let userIdByEmail = await Usuario.findOne({
            where: {
                email: req.params['email'],
            }
        });

        let budgets = await Orcamento.findAll({
            where: {
                usuarioId: userIdByEmail.id
            }
        });

        if (budgets.length !== 0) {
            return budgets;
        } else {
            return "Não existem orçamentos cadastrados para esse usuário" ;
        }
    } catch (error) {
        console.error('Erro ao consultar orçamentos: ', error);
        return "Erro ao consultar orçamentos";
    }
}

async function insertBudget(req) {
    console.log("==============", req.body.usuario);
    try {
        let user = await Usuario.findOne({
            where: {
                email: req.body.usuario,
            }
        });

        const orcamento = await Orcamento.create({
            "massa": req.body.massa,
            "recheio1": req.body.recheio1,
            "recheio2": req.body.recheio2,
            "cobertura": req.body.cobertura,
            "frase": req.body.frase,
            "data": req.body.data,
            "usuarioId": user.id,
        });
        //orcamento.email = user.email
        return {
            success: true,
            message: "Orçamento salvo com sucesso",
            data: orcamento
        };//orcamento;
            
    } catch (error) {
        console.error('Erro ao salvar: ', error);
        return "Erro ao salvar";
    }
}

async function updateBudgetById(req) {
    try {
        let orcamento = await Orcamento.findByPk(req.params['id']);
        if(orcamento) {
            orcamento.massa = req.body.massa;
            orcamento.recheio1 = req.body.recheio1;
            orcamento.recheio2 = req.body.recheio2;
            orcamento.cobertura = req.body.cobertura;
            orcamento.frase = req.body.frase;
            orcamento.data = req.body.data;
            await orcamento.save();
            return {
                success: true,
                message: "Orçamento atualizado com sucesso",
                data: orcamento
            }
        } else {
            return {
                success: false,
                message: "Não for possível atualizar o orçamento",
            }
        }
    } catch (error) {
        console.error('Erro ao atualizar: ', error);
        return "Erro ao atualizar";
    }
}

async function deleteBudgetById(req) {
    try {
        const orcamento = await Orcamento.findByPk(req.params['id']);
        if(orcamento) {
            await orcamento.destroy();
            return {
                success: true,
                message: "Orçamento deletado com sucesso",
                data: orcamento
            }
        } else {
            return {
                success: false,
                message: "Orçamento não existe",
            }
        }
    } catch (error) {
        console.error('Erro ao deletar: ', error);
        return "Erro ao deletar";
    }
}


module.exports = { selectAllItems, selectAllUserBudgets, insertBudget, updateBudgetById, deleteBudgetById }