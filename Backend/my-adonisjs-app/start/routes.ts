import router from '@adonisjs/core/services/router'
const ToDosController = () => import('#controllers/to_dos_controller')

router.get('/toDos', [ToDosController, 'index'])
router.get('/toDos/:id', [ToDosController, 'show'])
router.post('/toDos', [ToDosController, 'create'])
router.put('/toDos/:id', [ToDosController, 'edit'])
router.delete('/toDos/:id', [ToDosController, 'destroy'])

router.get('/', async () => {
  return {
    to_do: 'list',
  }
})
