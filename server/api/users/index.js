// função que vai interceptar as requisições que são enviadas para o servidor
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  console.log(body)

  return {
    success: true,
    data: 'hello world'
  }
})