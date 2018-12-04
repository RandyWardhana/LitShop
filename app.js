import express from 'express'
import bodyparser from 'body-parser'
import env from 'dotenv'
import router from './routes/index'

env.config()

const app = express()
const port = process.env.PORT

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', process.cwd() + '/view')

// Set url for static file
app.use('/static', express.static(process.cwd() + '/static'))

// Setup app router
app.use('/', router)


app.listen(port, () => { console.log(`Listening on port ${port}`) })
