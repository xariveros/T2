import Ingrediente from "../models/ingredientes";

export async function createIngrediente(req, res) {
  const { name, descripcion } = req.body;
  try {
    let new_ingrediente = await Ingrediente.create(
      {
        name,
        descripcion,
      },
      { fields: ["name", "descripcion"] }
    );
    return res
      .status(201)
      .json({ message: "Ingrediente creado", new_ingrediente });
  } catch (e) {
    res.status(400).json({ message: "Input invalido" });
  }
}

export async function allIngredientes(req, res) {
  const ingredientes = await Ingrediente.findAll();
  res.json({
    data: ingredientes,
  });
}

export async function getIngredienteById(req, res) {
  const { id } = req.params;
  try {
    const ingrediente = await Ingrediente.findOne({ where: { id: id } });
    res.status(200).json({ data: ingrediente });
  } catch (e) {
    res.status(400).json({ message: e });
  }
}

export async function deleteIngredienteById(req, res) {
  const { id } = req.params;
  const how_many_deleted = await Ingrediente.destroy({ where: { id: id } });
  res.json({ message: "se elimino", data: how_many_deleted });
}
