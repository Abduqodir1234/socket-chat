import * as redis from "redis"
const redis_client = redis.createClient({
  url:process.env.REDIS_URI
})
redis_client.on("ready",()=>console.log("Redis client connected"))
redis_client.on("error",(err)=>console.log("Error",err))
redis_client.on("disconnect",()=>console.log("Redis client disconnected"))

export default redis_client