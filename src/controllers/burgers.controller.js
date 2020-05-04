import Burger from "../models/burgers";
import Burger_Ingrediente from "../models/burgers_ingredientes";

//post burger
export async function createBurger(req, res) {
  const { nombre, precio, descripcion, imagen } = req.body;
  console.log(req.body);
  var ingredientes = [];
  try {
    let new_burger = await Burger.create(
      {
        nombre,
        precio,
        descripcion,
        imagen,
        ingredientes,
      },
      { fields: ["nombre", "precio", "descripcion", "imagen"] }
    );
    if (new_burger) {
      return res.status(201).json(new_burger);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Input invalido" });
  }
}
//get burger
export async function allBurgers(req, res) {
  try {
    const all_burgers = await Burger.findAll();
    res.json(all_burgers);
  } catch (e) {
    console.log("no hay");
    res.status(500).json({ message: "algo salio mal" });
  }
}

//hamburguesa por id
export async function getBurgerById(req, res) {
  const { id } = req.params;
  try {
    const hamburguesa = await Burger.findOne({
      where: { id: id },
      include: { model: Burger_Ingrediente, as: "ingredientes" },
    });
    if (hamburguesa) {
      res.status(200).json(hamburguesa);
    } else {
      res.status(404).json({ message: "No existe" });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "input invalido" });
  }
}

//borrar hamburguesa por id

export async function deleteBurgerById(req, res) {
  const { id } = req.params;
  const how_many_deleted = await Burger.destroy({ where: { id: id } });
  res.json({ message: "se elimino", data: how_many_deleted });
}

export async function updateBurgerById(req, res) {
  const { id } = req.params;
  const { name, precio, descripcion, imagen } = req.body;
  const burger = await Burger.findOne({ where: { id: id } });

  await burger.update({
    name,
    precio,
    descripcion,
    imagen,
  });
  res.json({ message: "se actualizo", data: burger });
}
