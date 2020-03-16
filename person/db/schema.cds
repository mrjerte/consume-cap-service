namespace test;


using cuid from '@sap/cds/common';
entity Person{
  key id : Integer;
  name   : String(111);
  locationId: Integer;
}
