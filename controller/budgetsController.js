const path = require('path');

const { selectAllItems, selectBudgetById, selectAllUserBudgets, insertBudget, updateBudgetById, deleteBudgetById } = require(path.join(__dirname, '../services/budgetsService.js'));

const getItems = async (req, res) => {
    try {
        const items = await selectAllItems();
        res.status(200).json(items);
    } catch (error) {
        console.error('Erro ao carregar os items:', error);
        res.status(500).json({ error: 'Erro ao obter os items' });
    }
};

const getBudget = async (req, res) => {
    try {
        const budget = await selectBudgetById(req);
        res.status(200).json(budget);
    } catch (error) {
        console.error('Erro ao carregar orçamento:', error);
        res.status(500).json({ error: 'Erro ao obter os orçamento' });
    }
}

const getBudgets = async (req, res) => {
    try {
        const budgets = await selectAllUserBudgets(req);
        res.status(200).json(budgets);
    } catch (error) {
        console.error('Erro ao carregar os orçamentos:', error);
        res.status(500).json({ error: 'Erro ao obter os orçamentos' });
    }
};

const postBudget = async (req, res) => {
    try {
        const result = await insertBudget(req);
        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(400).json(result);
        }
    } catch (error) {
        console.error('Erro ao processar o salvamento do orçamento:', error);
        res.status(500).json({ 
            success: false, 
            message: "Erro interno no servidor", 
            error: error.message 
        });
    }
}

const putBudget = async (req, res) => {
    try {
        const result = await updateBudgetById(req);
        if(result.success) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    } catch (error) {
        console.error('Erro ao atualizar orçamento', error);
        res.status(500).json({ 
            success: false, 
            message: "Erro interno no servidor", 
            error: error.message 
        });
    }
}

const deleteBudget = async (req, res) => {
    try {
        const result = await deleteBudgetById(req);
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result); 
        }
    } catch (error) {
        console.error('Erro ao deletar orçamento', error);
        res.status(500).json({ 
            success: false, 
            message: "Erro interno no servidor", 
            error: error.message 
        });
    }
}

module.exports = { getItems, getBudgets, postBudget, putBudget, deleteBudget, getBudget }
