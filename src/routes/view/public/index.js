import {Router} from 'express'

const publicRouter = Router()

publicRouter.get('/', async (req, res) => {
    res.render('index')
})

export default publicRouter