function getChampionRoutes() {
  const router = express.Router()
  
  router.use('/champion', getChampionRoutes)

  router.use('/names', getChampionNamesHandler)

  return router
}
  

