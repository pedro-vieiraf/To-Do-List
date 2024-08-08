import { test } from '@japa/runner'
import { assert } from 'console'
// import { ToDoFactory } from '#database/factories/to_do_factory'

test.group('To Do', (group: { tap: (arg0: (t: any) => void) => void }) => {
  group.tap((t) => {
    t.options.title = `it ${t.options.title}`
  })

  test('tests the GET route', async ({ client }: { client: any }) => {
    const response = await client.get('/toDos')

    response.assertBodyContains([
      {
        "title": "Levar a vó no Jiu-Jitsu",
        "description": "Levar a vó na quarta-feira às 19h",
        "isCompleted": 0
      },
      {
        "title": "Comprar pão",
        "description": "Comprar pão na padaria do seu Zé",
        "isCompleted": 1
      },
      {
        "title": "Sem ideias",
        "description": null,
        "isCompleted": 0
      }
    ])
    response.assert.exists(response.body)
    response.assertStatus(200)
  })

  test('should test the show route', async ({ client }: { client: any }) => {
    const response = await client.get('/toDos/1')

    response.assertStatus(200)
    response.assertBodyContains({
      title: 'Levar a vó no Jiu-Jitsu',
      description: 'Levar a vó na quarta-feira às 19h',
      isCompleted: 0,
    })
  })

  test('should test the create route', async ({ client }: { client: any }) => {
    const response = await client.post('/toDos').form({
      title: 'tomara que funcione',
      description: 'frase do Ez',
    })

    response.assertStatus(201)
    response.assertBodyContains({
      title: 'tomara que funcione',
      description: 'frase do Ez',
    })
  })

  test('should test the edit route', async ({ client }: { client: any }) => {
    const response = await client.put('/toDos/3').form({
      title: 'Com ideias!',
      description: 'genial demais',
      isCompleted: 1,
    })

    response.assertStatus(200)
    response.assertBodyContains({
      title: 'Com ideias!',
      description: 'genial demais',
    })
  })

  test('should test the destroy route', async ({ client }: { client: any }) => {
    const response = await client.delete('/toDos/3')
    
    response.assertStatus(204)
  })
})
