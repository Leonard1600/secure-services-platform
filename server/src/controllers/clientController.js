import Client from '../models/Client.js';

export const createClient = async (req, res) => {
  try {
    const { name, email, phone, address, notes } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'El nombre es obligatorio' });
    }

    const client = await Client.create({
      name,
      email,
      phone,
      address,
      notes,
      createdBy: req.user._id,
    });

    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear cliente' });
  }
};

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find({
      createdBy: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener clientes' });
  }
};
