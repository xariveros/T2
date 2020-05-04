import Ingrediente from "../models/ingredientes";

export async function createIngrediente(req, res) {
  const { name, descripcion } = req.body;
  let new_ingrediente = await Ingrediente.create(
    {
      name,
      descripcion,
    },
    { fields: ["name", "descripcion"] }
  );
  return res.json({ message: "Se creo ingrediente", data: new_ingrediente });
}

export async function allIngredientes(req, res) {
  const ingredientes = await Ingrediente.findAll();
  res.json({
    data: ingredientes,
  });
}

export async function getIngredienteById(req, res) {
  const { id } = req.params;
  const ingrediente = await Ingrediente.findOne({ where: { id: id } });
  res.json({ data: ingrediente });
}

export async function deleteIngredienteById(req, res) {
  const { id } = req.params;
  const how_many_deleted = await Ingrediente.destroy({ where: { id: id } });
  res.json({ message: "se elimino", data: how_many_deleted });
}
