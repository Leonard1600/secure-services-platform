import Asset from '../models/Asset.js';

export const createAsset = async (req, res) => {
  try {
    const { name, description, client, services, location, status } = req.body;

    if (!name || !client) {
      return res.status(400).json({
        message: 'Nombre y cliente son obligatorios',
      });
    }

    const asset = await Asset.create({
      name,
      description,
      client,
      services,
      location,
      status,
      createdBy: req.user._id,
    });

    res.status(201).json(asset);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear sistema' });
  }
};

export const getAssets = async (req, res) => {
  try {
    const assets = await Asset.find({
      createdBy: req.user._id,
    })
      .populate('client', 'name')
      .populate('services', 'name price')
      .sort({ createdAt: -1 });

    res.json(assets);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener sistemas' });
  }
};
