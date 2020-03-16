using { test as my } from '../db/schema';

service app {

	 entity Location as projection on my.Location;

}
