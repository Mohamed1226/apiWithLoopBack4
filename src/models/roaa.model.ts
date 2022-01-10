import {Entity, model, property} from '@loopback/repository';

@model()
export class Roaa extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  categoryID: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Roaa>) {
    super(data);
  }
}

export interface RoaaRelations {
  // describe navigational properties here
}

export type RoaaWithRelations = Roaa & RoaaRelations;
