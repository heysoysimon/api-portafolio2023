//aqui van las rutas de la api
const {Router} = require('express')
const router = Router()

const {
getProyectos,
getProyectosID,
createProyectos,
updateProyectos,
deleteProyecto
} =  require("../controllers/index")

router.get('/proyectos', getProyectos)
router.get('/proyectos/:id', getProyectosID)
router.post('/proyectos',createProyectos)
router.put('/proyectos/:id', updateProyectos)
router.delete('/proyectos/:id', deleteProyecto)
module.exports = router