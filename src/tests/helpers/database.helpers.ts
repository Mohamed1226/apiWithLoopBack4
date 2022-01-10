import {RoaaController} from '../../controllers';
import {Roaa} from '../../models';
import {RoaaRepository} from '../../repositories';
import {testdb} from '../fixtures/datasources/testdb.datasource';

export async function givenEmptyDatabase() {
  await new RoaaRepository(testdb).deleteAll();
}

export function givenProductData(data?: Partial<Roaa>) {
  return Object.assign(
    {
      _id: 1,
      name: 'roaa 1',
      categoryID: 'Ahmed'
    },
    data,
  );
}

export async function givenProduct(data?: Partial<Roaa>) {
  return new RoaaRepository(testdb).create(givenProductData(data));
}
