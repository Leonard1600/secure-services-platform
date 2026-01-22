import Category from '../models/Category.js';

// @desc    Crear categoría
// @route   POST /api/categories
// @access  Private/Admin
export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const categoryExists = await Category.findOne({ name });

    if (categoryExists) {
      return res.status(400).json({ message: 'La categoría ya existe' });
    }

    const category = await Category.create({
      name,
      description,
    });

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear categoría' });
  }
};

// @desc    Obtener todas las categorías
// @route   GET /api/categories
// @access  Private
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({ active: true }).sort({
      createdAt: -1,
    });

    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener categorías' });
  }
};
