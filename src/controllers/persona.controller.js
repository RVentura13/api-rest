import { getConnection } from "./../database/database";

const getPersonas = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM persona");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getPersona = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM persona WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addPersona = async (req, res) => {
  try {
    const { usuario, nombre, apellido } = req.body;
    const persona = { usuario, nombre, apellido };
    res.json({ message: "Datos agregados" });

    if (
      usuario === undefined ||
      nombre === undefined ||
      apellido === undefined
    ) {
      res
        .status(400)
        .json({ message: "Mala solicitud. Favor llenar todos los campos" });
    }
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO persona SET ?", persona);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updatePersona = async (req, res) => {
  try {
    const { id } = req.params;
    const { usuario, nombre, apellido } = req.body;

    if (
      usuario === undefined ||
      nombre === undefined ||
      apellido === undefined
    ) {
      res.status(400).json({
        message: "Error en los datos enviados. Favor llenar todos los campos",
      });
    }

    const persona = { usuario, nombre, apellido };
    const connection = await getConnection();
    const result = await connection.query("UPDATE persona SET ? WHERE id = ?", [
      persona,
      id,
    ]);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deletePersona = async (req, res) => {
  try {
    const { id } = req.params;

    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM persona WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getPersonas,
  getPersona,
  addPersona,
  updatePersona,
  deletePersona,
};
