const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')

app.listen(3000)