import express from 'express'
// any other routes imports would go here
import {getMathRoutes} from './math'
import {getChampionRoutes} from './test'

function getRoutes() {
  // create a router for all the routes of our app
  const router = express.Router()

  // any additional routes would go here
  router.use('/champion', getChampionRoutes)

  return router
}

export {getRoutes}