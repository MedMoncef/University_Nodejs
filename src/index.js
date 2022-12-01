import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import expressLayouts from 'express-ejs-layouts'
import 'dotenv/config'
import databaseConnexion from './tools/databaseConnexion'
import homes from './routes/homes'
import langes from './routes/langes'
import actualites from './routes/actualites'
import contacts from './routes/contacts'
import diplome from './routes/diplome'
import btp from './routes/btp'
import bts from './routes/bts'
import formation from './routes/formation'
import programme from './routes/programme'
import etudiant from './routes/etudiant'
import finance from './routes/finance'
import bourse from './routes/bourse'
import heber from './routes/heber'
import communiques from './routes/communiques'
import accelere from './routes/acceleres'
import histoire from './routes/nhistoires'
import mission from './routes/missions'
import langue_main from './routes/langue_main'
import inscriptions from './routes/inscription'
import login from './routes/login'
import bodyParser from 'body-parser'
const app = express()
const port = process.env.PORT

//connect to mongodb database
databaseConnexion()

//enable ejs
app.set('view engine', 'ejs')
app.use(express.static('public'))


//enable middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
//app.use(expressLayouts)

//Bdd
app.use('/',homes)
app.use('/',langes)
app.use('/',actualites)
app.use('/',contacts)
app.use('/',diplome)
app.use('/',btp)
app.use('/',bts)
app.use('/',formation)
app.use('/',programme)
app.use('/',etudiant)
app.use('/',finance)
app.use('/',bourse)
app.use('/',heber)
app.use('/',accelere)
app.use('/',histoire)
app.use('/',mission)
app.use('/',communiques)
app.use('/',langue_main)
app.use('/',inscriptions)
app.use('/',login)

//enable routes

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
