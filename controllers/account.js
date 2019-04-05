/**
 * Account controller
 * by Briar Hughes
 * 
 * @author Jacob Briar Hughes <s527770@nwmissouri.edu>
 * 
 */
const express = require('express')
const api = express.Router()
const LOG = require('../utils/logger.js')
const find = require('lodash.find')
const remove = require('lodash.remove')
const Model = require('../models/account.js')
const notfoundstring = 'user not found'


//get all JSON
api.get('/findall', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const data = req.app.locals.accounts.query
    res.send(JSON.stringify(data))
  })

// JSON by ID
api.get('/findone/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const id = parseInt(req.params.id)
    const data = req.app.locals.accounts.query
    const item = find(data, { _id: id })
    if (!item) { return res.end(notfoundstring) }
    res.send(JSON.stringify(item))
  })

// GET to this controller base URI (the default)
api.get('/', (req, res) => {
    res.render('account/index.ejs')
  })

