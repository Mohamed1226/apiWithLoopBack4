import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RoaaDataSource} from '../datasources';
import {Roaa, RoaaRelations} from '../models';

export class RoaaRepository extends DefaultCrudRepository<
  Roaa,
  typeof Roaa.prototype._id,
  RoaaRelations
> {
  constructor(
    @inject('datasources.roaa') dataSource: RoaaDataSource,
  ) {
    super(Roaa, dataSource);
  }
}
