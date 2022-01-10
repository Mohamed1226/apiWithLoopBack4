import {UserProfileFactory} from '@loopback/authentication';
import {createStubInstance, expect, StubbedInstanceWithSinonAccessor} from '@loopback/testlab';
import {count} from 'console';
import sinon from 'sinon';
import {RoaaController} from '../../../controllers';
import {Roaa, RoaaRelations} from '../../../models';
import {RoaaRepository} from '../../../repositories';
import { givenEmptyDatabase } from '../../helpers/database.helpers';
import {UserProfile} from '@loopback/security';
import {testdb} from '../../fixtures/datasources/testdb.datasource';

describe('RoaaController (integration)', () => {
  before(givenEmptyDatabase)
})


describe('RoaaController (unit)', () => {
  let repository: StubbedInstanceWithSinonAccessor<RoaaRepository>;
  let userProfile: StubbedInstanceWithSinonAccessor<UserProfile>;
  beforeEach(givenStubbedRepository);
  describe('count()', () => {
    it('test count of Roaa', async () => {
      const controller = new RoaaController(repository, userProfile);

      repository.stubs.create.resolves(new Roaa()); // add one roaa to datasource

      const count = await controller.count();

      // expect(count).to.equal(1);
      sinon.assert.match(count, 1);
    });
  });

  function givenStubbedRepository() {
    repository = createStubInstance(RoaaRepository);
  }
});
