

using { test  as my } from '../db/extended';

using test  from './external/csn/test';

service AdminService{
/* @cds.persistence.skip
	entity Location as projection on Location;
*/
@cds.persistence.skip
  entity Location as projection on test.Location;

}
