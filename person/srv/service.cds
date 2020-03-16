using { test as my } from '../db/schema';

service app {

	 entity Person as projection on my.Person;

}
