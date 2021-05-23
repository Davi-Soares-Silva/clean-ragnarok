import { CreateGameController } from './create-game'

describe('CreateGame Controller', () => {
  test('should return 400 if no name is provided', () => {
    const sut = new CreateGameController()
    const httpRequest = {
      body: {
        price: 10,
        description: 'any_description',
        imageUrl: 'http://any_url.com'
      }
    }
    const httResponse = sut.handle(httpRequest)

    expect(httResponse.statusCode).toBe(400)
  })
})