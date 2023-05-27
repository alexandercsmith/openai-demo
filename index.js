/**
 * @module ai-demo
 */
require('dotenv').config()

/**
 * @module openai
 */
const {
  Configuration,
  OpenAIApi
} = require('openai')

/**
 * @instance
 */
const config = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION_ID,
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

/**
 * @async
 * @function main
 */
async function main () {
  const models = await openai.listModels()

  console.log('@models:', models.data.data)
}

/**
 * @exec
 */
main()
.then(() => process.exit(0))
.catch(err => {
  console.log('@failure:', err)
  process.exit(1)
})