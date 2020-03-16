
namespace test;


using { cuid } from '@sap/cds/common';

entity Location {
  key id  : Integer;
  country : String(111);
}
