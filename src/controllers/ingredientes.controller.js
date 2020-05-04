import Ingrediente from "../models/ingredientes";

export async function createIngrediente(req, res) {
  const { nombre, descripcion } = await req.body;
  console.log(nombre, descripcion);
  try {
    let new_ingrediente = await Ingrediente.create(
      {
        nombre,
        descripcion,
      },
      { fields: ["nombre", "descripcion"] }
    );
    return res.status(201).json(new_ingrediente);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Input invalido" });
  }
}

export async function allIngredientes(req, res) {
  const ingredientes = await Ingrediente.findAll();
  res.status(200).json({
    data: ingredientes,
  });
}

export async function getIngredienteById(req, res) {
  const { id } = req.params;
  try {
    const ingrediente = await Ingrediente.findOne({ where: { id: id } });
    if (ingrediente) {
      res.status(200).json(ingrediente);
    } else {
      res.status(404).json({ message: "Ingrediente inexistente" });
    }
  } catch (e) {
    res.status(400).json({ message: "id invalido" });
  }
}

export async function deleteIngredienteById(req, res) {
  const { id } = req.params;
  const how_many_deleted = await Ingrediente.destroy({ where: { id: id } });
  res.json({ message: "se elimino", data: how_many_deleted });
}
