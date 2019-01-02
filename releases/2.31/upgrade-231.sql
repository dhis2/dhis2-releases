------------------------------------------------------------------------------------------------------------------
---------- SQL commands converting trackedentitydatavalue into new json column in programstageinstance  ----------
------------------------------------------------------------------------------------------------------------------

alter table programstageinstance add column eventdatavalues jsonb;

######################################################
-- clean data in Demo DB a bit:

-- corrects invalid values of datavalues in Demo DB
update datavalue set value = regexp_replace(value, '^-(\d+)', '\1') where value ~ '^-\d+';

-- corrects invalid values of datavalues in Demo DB
update datavalue set value = regexp_replace(value, '^0$', '1') where value ~ '^0$';

-- Fixes the domaintype in Demo DB - should be run only on Demo DB! (Requested by Juan Manuel)
update dataelement set domaintype = 'TRACKER' where dataelementid = 423669;

######################################################

-- Required for jsonb for events issue:

-- Fixes invalid timestamps in DB (problems found in Demo DB, but can be run on all DBs)
update trackedentitydatavalue set created = substring( created::text, 1, 23 )::timestamp where created::text ~ '.*\.\d{6}$';
update trackedentitydatavalue set lastupdated = substring( lastupdated::text, 1, 23 )::timestamp where lastupdated::text ~ '.*\.\d{6}$';

-- Fetch data from trackedentitydatavalue table, process them, creates a jsonb representation of them and stores into eventdatavalues column 
-- in programstageinstance table. 
-- Various PostgreSql functions are used to get the required format of the JSON string. The string is then cast to jsonb type. 
-- Takes care of empty values. When there is no trackedentitydatavalue for given programstageinstance a null is saved. This can be changed 
-- and specified JSON string can be saved instead (change NULL for the given JSON String).
update programstageinstance psi set eventdatavalues =
  to_jsonb(coalesce(nullif(replace(array_to_string(array(
    select jsonb_build_object(de.uid, jsonb_build_object('created', tedv.created, 'lastUpdated', tedv.lastupdated, 'value', tedv.value, 
                                                         'providedElsewhere', tedv.providedelsewhere, 'storedBy', tedv.storedby)) 
    from trackedentitydatavalue tedv join dataelement de on tedv.dataelementid = de.dataelementid
    where tedv.programstageinstanceid = psi.programstageinstanceid), ','), '}},{', '},'), ''), NULL)::json);

drop table trackedentitydatavalue;