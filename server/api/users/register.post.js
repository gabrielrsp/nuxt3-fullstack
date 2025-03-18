import { createUser } from "~/server/repository/users"

// função que vai interceptar as requisições que são enviadas para o servidor
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const {
    name, email, password, confirmPassword
   } = body

   if( !name || !email || !password || !confirmPassword) {
    return sendError(event, createError( {
      statusCode: 406,
      statusMessage: "Required fields are missing"
    }
    ))
   }

   if(password !== confirmPassword) {
    return sendError(
      event,
      createError({
        statusCode: 406,
        statusMessage: "Passwords do not match"
      })
    )
   }

   const data = await createUser({
    name,
    email,
    password
   })

  return {
    success: true,
    data
  }
})