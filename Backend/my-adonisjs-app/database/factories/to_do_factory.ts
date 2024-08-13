import factory from '@adonisjs/lucid/factories'
import ToDo from '#models/to_do'

export const ToDoFactory = factory
  .define(ToDo, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      isCompleted: faker.datatype.boolean(),
    }
  })
  .build()
