/** 
*  transaction line item controller
*  Handles requests related to transaction line items (see routes)
*
* @author  <S534917@nwmissouri.edu>
*
*/
const express = require('express')
const api = express.Router()
const LOG = require('../utils/logger.js')
const find = require('lodash.find')
const remove = require('lodash.remove')
const Model = require('../models/transaction.js')
const notfoundstring = 'transaction not found'

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('/findall', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.transaction.query
  res.send(JSON.stringify(data))
})

// GET one JSON by ID
api.get('/findone/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id)
  const data = req.app.locals.transaction.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring) }
  res.send(JSON.stringify(item))
})

// RESPOND WITH VIEWS  --------------------------------------------

// GET to this controller base URI (the default)
api.get('/', (req, res) => {
  res.render('transactionLineItem/index.ejs')
})

// GET create
api.get('/create', (req, res) => {
  LOG.info(`Handling GET /create${req}`)
  const item = new Model()
  LOG.debug(JSON.stringify(item))
  res.render('transaction/create',
    {
      title: 'Create transaction',
      layout: 'layout.ejs',
      transactionLineItem: item
    })
res.render('transactionLineItem/index.ejs')
})

// GET /delete/:id
api.get('/delete/:id', (req, res) => {
  LOG.info(`Handling GET /delete/:id ${req}`)
  const id = parseInt(req.params.id)
  const data = req.app.locals.transaction.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring) }
  LOG.info(`RETURNING VIEW FOR ${JSON.stringify(item)}`)
  return res.render('transactionLineItem/delete.ejs',
    {
      title: 'Delete transaction',
      layout: 'layout.ejs',
      transactionLineItem: item
    })
})

// GET /details/:id
api.get('/details/:id', (req, res) => {
  LOG.info(`Handling GET /details/:id ${req}`)
  const id = parseInt(req.params.id)
  const data = req.app.locals.transaction.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring) }
  LOG.info(`RETURNING VIEW FOR ${JSON.stringify(item)}`)
  return res.render('transactionLineItem/details.ejs',
    {
      title: 'transactionLineItem Details',
      layout: 'layout.ejs',
      transactionLineItem: item
    })
res.render('transactionLineItem/index.ejs')
})

// GET /edit/:id
api.get('/edit/:id', (req, res) => {
  LOG.info(`Handling GET /edit/:id ${req}`)
  const id = parseInt(req.params.id)
  const data = req.app.locals.transactionLineItems.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring) }
  LOG.info(`RETURNING VIEW FOR ${JSON.stringify(item)}`)
  return res.render('transactionLineItem/edit.ejs',
    {
      title: 'transactionLineItems',
      layout: 'layout.ejs',
      transactionLineItem: item
    })
res.render('transactionLineItem/index.ejs')
})

// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
api.post('/save', (req, res) => {
  LOG.info(`Handling POST ${req}`)
  LOG.debug(JSON.stringify(req.body))
  const data = req.app.locals.transactionLineItems.query
  const item = new Model()
  LOG.info(`NEW ID ${req.body._id}`)
//   item._id = parseInt(req.body._id)
  item.transactionID = parseInt(req.body.transactionID)
  item.amount = parseInt(req.body.amount)
  item.transactionDate = parseInt(req.body.transactionDate)
  item.postedDate = parseInt(req.body.postedDate)
  item.transactionType = parseInt(req.body.transactionType)
  item.cardNumber = parseInt(req.body.cardNumber)
  item.transactionStatus = parseInt(req.body.transactionStatus)
  data.push(item)
  LOG.info(`SAVING NEW transactionLineItem ${JSON.stringify(item)}`)
  return res.redirect('/transactionLineItem/index.ejs')
})

// POST update
api.post('/save/:id', (req, res) => {
  LOG.info(`Handling SAVE request ${req}`)
  const id = parseInt(req.params.id)
  LOG.info(`Handling SAVING ID=${id}`)
  const data = req.app.locals.transactionLineItems.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring) }
  LOG.info(`ORIGINAL VALUES ${JSON.stringify(item)}`)
  LOG.info(`UPDATED VALUES: ${JSON.stringify(req.body)}`)
  item.transactionID = parseInt(req.body.transactionID)
  item.amount = parseInt(req.body.amount)
  item.transactionDate = parseInt(req.body.transactionDate)
  item.postedDate = parseInt(req.body.postedDate)
  item.transactionType = parseInt(req.body.transactionType)
  item.cardNumber = parseInt(req.body.cardNumber)
  item.transactionStatus = parseInt(req.body.transactionStatus)
  LOG.info(`SAVING UPDATED transactionLineItem ${JSON.stringify(item)}`)
  return res.redirect('/transactionLineItem/index.ejs')
})

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', (req, res) => {
//   LOG.info(`Handling DELETE request ${req}`)
//   const id = parseInt(req.params.id)
//   LOG.info(`Handling REMOVING ID=${id}`)
//   const data = req.app.locals.transactionLineItems.query
//   const item = find(data, { _id: id })
//   if (!item) { return res.end(notfoundstring) }
//   if (item.isActive) {
//     item.isActive = false
//     console.log(`Deacctivated item ${JSON.stringify(item)}`)
//   } else {
//     const item = remove(data, { _id: id })
//     console.log(`Permanently deleted item ${JSON.stringify(item)}`)
//   }
  return res.redirect('/transactionLineItem/index.ejs')
})

module.exports = api