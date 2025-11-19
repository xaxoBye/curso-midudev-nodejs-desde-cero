import { Router } from 'express'

import { MovieController } from '../controllers/movies.js'

/// MINUTO 70 = 1h + 10min DEL VIDEO
// https://www.youtube.com/watch?v=ev3Yxva4wI4&list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7&index=4

export const moviesRouter = Router()

moviesRouter.get('/', MovieController.getAll)
moviesRouter.get('/:id', MovieController.getById)

moviesRouter.post('/', MovieController.create)
moviesRouter.delete('/:id', MovieController.delete)
moviesRouter.patch('/:id', MovieController.update)
