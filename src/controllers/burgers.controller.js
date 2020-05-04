import Burger from "../models/burgers";

//post burger
export async function createBurger(req, res) {
  const { name, precio, descripcion, imagen } = req.body;
  console.log(req.body);
  try {
    let new_burger = await Burger.create(
      {
        name,
        precio,
        descripcion,
        imagen,
      },
      { fields: ["name", "precio", "descripcion", "imagen"] }
    );
    if (new_burger) {
      return res.json({ message: "Se creo hamburguesa", data: new_burger });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "algo salio mal" });
  }
}
//get burger
export async function allBurgers(req, res) {
  try {
    const all_burgers = await Burger.findAll();
    res.json({
      data: all_burgers,
    });
  } catch (e) {
    console.log("no hay");
  }
}

//hamburguesa por id
export async function getBurgerById(req, res) {
  const { id } = req.params;
  const hamburguesa = await Burger.findOne({ where: { id: id } });
  res.json({ data: hamburguesa });
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
