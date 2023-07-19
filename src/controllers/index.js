const { Pool } = require('pg')

const pool = new Pool({
    user: "simon",
    host: "localhost",
    password: "usuario",
    database: "portafolio",
    port: "5432"
  })
  const getProyectos = ('/proyectos', async (req, res) => {
    try {
      const response = await pool.query('SELECT * FROM proyectos');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json(response.rows);
    } catch (error) {
      console.error(error.stack);
      res.status(500).json({ error: 'algo salio mal' });
    }
  });
  const getProyectosID = async (req, res) =>{
    const id = Number(req.params.id)
    if (!Number.isInteger(id)) {
      res.status(400).json({ error: 'El ID del proyecto debe ser un número entero válido' })
      return
    }
    const response = await pool.query('SELECT * FROM proyectos WHERE id = $1', [id])
    res.json(response.rows)
  }

const createProyectos = async (req, res) => {
  const {nombre, imagen, des} = req.body;

  const response = await pool.query('INSERT INTO proyectos (nombre, imagen, des) VALUES ($1, $2, $3)', [nombre, imagen, des]);
  console.log(response)
  res.json({
      message: 'proyecto agregado satifatoriamente', 
      body: {
          user: {nombre, imagen, des}
      }
  })
}


const updateProyectos = async (req,res) => {
  const id = req.params.id
  const {nombre, imagen, des} = req.body
  const response = await pool.query('UPDATE proyectos SET nombre = $1, imagen = $2, des = $3 WHERE id = $4', 
  [nombre, imagen, des, id])
  console.log(response)
  res.json('proyecto actualizado!')
}

const deleteProyecto = async (req,res) => {
  const id = req.params.id
  const response = pool.query('DELETE FROM  proyectos WHERE id = $1', [id])
  console.log(response)
  res.json(  `proeycto ${id} eleminado`)
}

  module.exports ={
    getProyectos,
    getProyectosID,
    createProyectos,
    updateProyectos,
    deleteProyecto
  }