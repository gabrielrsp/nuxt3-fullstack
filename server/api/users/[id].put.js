export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id")
  const body = await readBody(event)

  const { name, email} = body

  if(!id) {
    return sendError(event,createError({
      statusCode: 406, statusMessage: "ID required"
    }))
  }

    return {
      success: true,
      data: {
        id: 1,
        name,
        email
      }
    }

})