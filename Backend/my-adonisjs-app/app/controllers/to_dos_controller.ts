import ToDo from '#models/to_do'
import type { HttpContext } from '@adonisjs/core/http'

export default class ToDosController {
  async index({ response }: HttpContext) {
    try {
      const list = await ToDo.query()
        .select('title', 'description', 'isCompleted')
        .orderBy('id', 'asc')
      return list
    } catch (err) {
      return response.status(500).send({ error: err.message })
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const { id } = params
      const getOne = await ToDo.query()
        .select('title', 'description', 'isCompleted')
        .where('id', id)
        .first()

      if (!getOne) {
        return response.status(404).json({ error: 'Item not found' })
      }

      return response.status(200).json(getOne)
    } catch (err) {
      return response.status(500).send({ error: err.message })
    }
  }

  async create({ request, response }: HttpContext) {
    try {
      const data = request.only(['title', 'description'])
      const newItem = await ToDo.create(data)
      const filteredItem = {
        title: newItem.title,
        description: newItem.description,
      }
      return response.status(201).json(filteredItem)
    } catch (err) {
      return response.status(500).send({ error: err.message })
    }
  }

  async edit({ params, request, response }: HttpContext) {
    try {
      const { id } = params
      const data = request.only(['title', 'description', 'isCompleted'])
      const getItem = await ToDo.findOrFail(id)
      const updatedItem = {
        title: data.title,
        description: data.description,
        isCompleted: data.isCompleted,
      }
      await getItem.merge(updatedItem).save()
      return response.status(200).json(updatedItem)
    } catch (err) {
      return response.status(500).send({ error: err.message })
    }
  }
  async destroy({ params, response }: HttpContext) {
    try {
      const { id } = params
      const getItem = await ToDo.findOrFail(id)
      await getItem.delete()
      return response.status(204).send(null)
    } catch (err) {
      return response.status(500).send({ error: err })
    }
  }
}
