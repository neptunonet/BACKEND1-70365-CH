import { Router } from "express";
import RecipeManager from "../managers/RecipeManager.js";

const router = Router();
const recipeManager = new RecipeManager();

// Ruta para obtener las recetas
router.get("/", async (req, res) => {
    try {
        const recipes = await recipeManager.getAll(req.query);
        res.status(200).json({ status: "success", payload: recipes });
    } catch (error) {
        res.status(error.code).json({ status: "error", message: error.message });
    }
});

// Ruta para obtener una receta por su ID
router.get("/:id", async (req, res) => {
    try {
        const recipe = await recipeManager.getOneById(req.params.id);
        res.status(200).json({ status: "success", payload: recipe });
    } catch (error) {
        res.status(error.code).json({ status: "error", message: error.message });
    }
});

// Ruta para crear una receta
router.post("/", async (req, res) => {
    try {
        const recipe = await recipeManager.insertOne(req.body);
        res.status(201).json({ status: "success", payload: recipe });
    } catch (error) {
        res.status(error.code).json({ status: "error", message: error.message });
    }
});

// Ruta para agregar un ingrediente específico en una receta por su ID
router.post("/:cid/ingredients/:pid", async (req, res) => {
    try {
        const { cid, pid } = req.params;
        const recipe = await recipeManager.addOneIngredient(cid, pid);
        res.status(201).json({ status: "success", payload: recipe });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

// Ruta para actualizar la cantidad de un ingrediente específico de una receta por su ID
router.put("/:cid/ingredients/:iid", async (req, res) => {
    try {
        const { cid, iid } = req.params;
        const { quantity } = req.body;
        const recipe = await recipeManager.updateQuantityOfIngredient(cid, iid, quantity);
        res.status(200).json({ status: "success", payload: recipe });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

// Ruta para quitar un ingrediente específico de una receta por su ID
router.delete("/:cid/ingredients/:iid", async (req, res) => {
    try {
        const { cid, iid } = req.params;
        const recipe = await recipeManager.removeOneIngredient(cid, iid);
        res.status(200).json({ status: "success", payload: recipe });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

// Ruta para quitar todos los ingredientes de una receta por su ID
router.delete("/:cid/ingredients", async (req, res) => {
    try {
        const { cid } = req.params;
        const recipe = await recipeManager.removeAllIngredients(cid);
        res.status(200).json({ status: "success", payload: recipe });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

export default router;