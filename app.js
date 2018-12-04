// // import ejs from 'ejs'
// // import express from 'express'
// // import bodyparser from 'body-parser'
// // import mysql from 'mysql2'
// import multiparty from 'multiparty'

var ejs = require('ejs')
var express = require('express')
var bodyparser = require('body-parser')
var mysql = require('mysql2')
var multiparty = require('multiparty')

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', process.cwd() + '/view')

// Set URL for file
app.use('/static', express.static(process.cwd() + '/static'))

app.get('/', async(req, res) => { 
    res.render('index')
})

app.listen('212', async (e) => {
    console.log('Listening on Port: 212')
})