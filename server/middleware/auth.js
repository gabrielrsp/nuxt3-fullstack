export default defineEventHandler((event) => { 
  const openEndPoints = ["/api/users/register"];

  if(openEndPoints.includes(event.req.url)) {
    return
  }

  const authorization = getHeader(event, "authorization")

  if(!authorization) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "User not authenticated!"
      })
    )
  }

})