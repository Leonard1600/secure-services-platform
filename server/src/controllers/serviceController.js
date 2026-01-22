import Service from '../models/Service.js';

// @desc    Crear servicio
// @route   POST /api/services
// @access  Private/Admin
export const createService = async (req, res) => {
  try {
    const { name, description, category, price } = req.body;

    const service = await Service.create({
      name,
      description,
      category,
      price,
    });

    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear servicio' });
  }
};

// @desc    Obtener servicios
// @route   GET /api/services
// @access  Private
export const getServices = async (req, res) => {
  try {
    const services = await Service.find({ active: true })
      .populate('category', 'name')
      .sort({ createdAt: -1 });

    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener servicios' });
  }
};
