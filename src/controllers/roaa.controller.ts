import {inject} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Roaa} from '../models';
import {RoaaRepository} from '../repositories';
import { authenticate} from '@loopback/authentication';
import {SecurityBindings, UserProfile} from '@loopback/security';


@authenticate('jwt')
export class RoaaController {
  constructor(
    @repository(RoaaRepository)
    public roaaRepository : RoaaRepository,
      @inject(SecurityBindings.USER,{optional:true})
    private userProfile: UserProfile,
  ) {}

  @post('/roaas')
  @response(200, {
    description: 'Roaa model instance',
    content: {'application/json': {schema: getModelSchemaRef(Roaa)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Roaa, {
            title: 'NewRoaa',
            exclude: ['_id'],
          }),
        },
      },
    })
    roaa: Omit<Roaa, '_id'>,
  ): Promise<Roaa> {

    return this.roaaRepository.create(roaa);
  }

  @get('/roaas/count')
  @response(200, {
    description: 'Roaa model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Roaa) where?: Where<Roaa>,
  ): Promise<Count> {
    return this.roaaRepository.count(where);
  }

  @get('/roaas')
  @response(200, {
    description: 'Array of Roaa model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Roaa, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Roaa) filter?: Filter<Roaa>,
  ): Promise<Roaa[]> {
    return this.roaaRepository.find(filter);
  }

  @patch('/roaas')
  @response(200, {
    description: 'Roaa PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Roaa, {partial: true}),
        },
      },
    })
    roaa: Roaa,
    @param.where(Roaa) where?: Where<Roaa>,
  ): Promise<Count> {
    return this.roaaRepository.updateAll(roaa, where);
  }

  @get('/roaas/{id}')
  @response(200, {
    description: 'Roaa model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Roaa, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Roaa, {exclude: 'where'}) filter?: FilterExcludingWhere<Roaa>
  ): Promise<Roaa> {
    return this.roaaRepository.findById(id, filter);
  }

  @patch('/roaas/{id}')
  @response(204, {
    description: 'Roaa PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Roaa, {partial: true}),
        },
      },
    })
    roaa: Roaa,
  ): Promise<void> {
    await this.roaaRepository.updateById(id, roaa);
  }

  @put('/roaas/{id}')
  @response(204, {
    description: 'Roaa PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() roaa: Roaa,
  ): Promise<void> {
    await this.roaaRepository.replaceById(id, roaa);
  }

  @del('/roaas/{id}')
  @response(204, {
    description: 'Roaa DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.roaaRepository.deleteById(id);
  }
}
