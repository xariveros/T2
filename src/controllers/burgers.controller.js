import Burger from "../models/burgers";
import Burger_Ingrediente from "../models/burgers_ingredientes";
import Ingrediente from "../models/ingredientes";

//post burger
export async function createBurger(req, res) {
  const { nombre, precio, descripcion, imagen } = req.body;
  console.log(req.body);
  try {
    let new_burger = await Burger.create(
      {
        nombre,
        precio,
        descripcion,
        imagen,
      },
      { fields: ["nombre", "precio", "descripcion", "imagen"] }
    );
    if (new_burger) {
      let aux = {
        id: new_burger.id,
        nombre: new_burger.nombre,
        precio: new_burger.precio,
        descripcion: new_burger.descripcion,
        imagen: new_burger.imagen,
        ingredientes: [],
      };
      return res.status(201).json(aux);
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
      include: {
        model: Burger_Ingrediente,
        as: "ingredientes",
        attributes: ["path"],
      },
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
  const burger_ingrediente = await Burger_Ingrediente.findOne({
    where: { burgerId: id },
  });
  if (burger_ingrediente) {
    const burger_ingrediente1 = await Burger_Ingrediente.destroy({
      where: { burgerId: id },
    });
  }
  const how_many_deleted = await Burger.destroy({ where: { id: id } });
  if (how_many_deleted > 0) {
    res.status(200).json({ message: "se elimino", data: how_many_deleted });
  } else {
    res.status(404).json({ message: "no se encontro", data: how_many_deleted });
  }
}

export async function updateBurgerById(req, res) {
  const { id } = req.params;
  const { nombre, precio, descripcion, imagen } = req.body;
  const burger = await Burger.findOne({
    where: { id: id },
    include: {
      model: Burger_Ingrediente,
      as: "ingredientes",
      attributes: ["path"],
    },
  });
  if (!burger) {
    return res.status(404).json({ message: "id no encontrado" });
  }
  try {
    await burger.update({
      nombre,
      precio,
      descripcion,
      imagen,
    });
    res.status(200).json(burger);
  } catch (e) {
    res.status(400).json({ message: "input invalido" });
  }
}

export async function addIngredientToBurger(req, res) {
  const { id1, id2 } = req.params;
  console.log(id1, id2);

  const hamburguesa = await Burger.findOne({
    where: { id: id1 },
    //include: { model: Burger_Ingrediente, as: "ingredientes" },
  });

  const ingrediente = await Ingrediente.findOne({
    where: { id: id2 },
    //include: { model: Burger_Ingrediente, as: "ingredientes" },
  });
  let path = "https://t2-iic3103-2020.herokuapp.com/ingrediente/" + id2;
  let burgerId = id1;
  let ingredienteId = id2;
  let new_burger_ingrediente = await Burger_Ingrediente.create(
    {
      burgerId,
      ingredienteId,
      path,
    },
    { fields: ["burgerId", "ingredienteId", "path"] }
  );
  res.status(201).json({
    burger: hamburguesa,
    ingrediente: ingrediente,
    relacion: new_burger_ingrediente,
  });
}

export async function deleteIngredienteToBurger(req, res) {
  const { id1, id2 } = req.params;
  try {
    const how_many_deleted = await Burger_Ingrediente.destroy({
      where: { ingredienteId: id2 },
    });
    if (how_many_deleted == 0) {
      res.status(404).json({ message: "no existe" });
    }
    res.status(200).json({ message: "bien elimnado" });
  } catch (e) {
    res.status(400).json({ message: "id invalido" });
  }
}
