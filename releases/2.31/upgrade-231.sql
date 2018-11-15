------------------------------------------------------------------------------------------------------------------
---------- SQL commands converting trackedentitydatavalue into new json column in programstageinstance  ----------
------------------------------------------------------------------------------------------------------------------

alter table programstageinstance add column eventdatavalues jsonb;

-- update programstageinstance psi set eventdatavalues = (select to_jsonb(array_agg(jsonb_build_object('dataElement', de.uid, 'created', tedv.created, 'lastUpdated', tedv.lastupdated, 'value', tedv.value, 'providedElsewhere', tedv.providedelsewhere, 'storedBy', tedv.storedby ))) from trackedentitydatavalue tedv join dataelement de on tedv.dataelementid = de.dataelementid where tedv.programstageinstanceid = psi.programstageinstanceid);
-- update programstageinstance psi set eventdatavalues = (select to_jsonb(array_agg(jsonb_build_object ( de.uid , jsonb_build_object('created', tedv.created, 'lastUpdated', tedv.lastupdated, 'value', tedv.value, 'providedElsewhere', tedv.providedelsewhere, 'storedBy', tedv.storedby )))) from trackedentitydatavalue tedv join dataelement de on tedv.dataelementid = de.dataelementid where tedv.programstageinstanceid = psi.programstageinstanceid);

-- Fetch data from trackedentitydatavalue table, process them, creates a jsonb representation of them and stores into eventdatavalues column 
-- in programstageinstance table. 
-- Various PostgreSql functions are used to get the required format of the JSON string. The string is then cast to jsonb type. 
-- Takes care of empty values. When there is no trackedentitydatavalue for given programstageinstance a null is saved. This can be changed 
-- and specified JSON string can be saved instead (change NULL for the given JSON String).
UPDATE programstageinstance psi SET eventdatavalues =
  to_jsonb(coalesce(nullif(replace(array_to_string(array(
    SELECT jsonb_build_object(de.uid, jsonb_build_object('created', tedv.created, 'lastUpdated', tedv.lastupdated, 'value', tedv.value, 
                                                         'providedElsewhere', tedv.providedelsewhere, 'storedBy', tedv.storedby)) 
    FROM trackedentitydatavalue tedv JOIN dataelement de ON tedv.dataelementid = de.dataelementid
    WHERE tedv.programstageinstanceid = psi.programstageinstanceid), ','), '}},{', '},'), ''), NULL)::json);

drop table trackedentitydatavalue;