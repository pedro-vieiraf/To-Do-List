import ToDo from '#models/to_do'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await ToDo.createMany([
      {
        title: 'Levar a vó no Jiu-Jitsu',
        description: 'Levar a vó na quarta-feira às 19h',
      },
      {
        title: 'Comprar pão',
        description: 'Comprar pão na padaria do seu Zé',
        isCompleted: true,
      },
      {
        title: 'Sem ideias',
      },
    ])
  }
}
