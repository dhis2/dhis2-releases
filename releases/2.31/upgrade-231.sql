------------------------------------------------------------------------------------------------------------------
---------- SQL commands converting trackedentitydatavalue into new json column in programstageinstance  ----------
------------------------------------------------------------------------------------------------------------------

alter table programstageinstance add column eventdatavalues jsonb;

update programstageinstance psi set eventdatavalues = (select to_jsonb(array_agg(jsonb_build_object('dataElement', de.uid, 'created', tedv.created, 'lastUpdated', tedv.lastupdated, 'value', tedv.value, 'providedElsewhere', tedv.providedelsewhere, 'storedBy', tedv.storedby ))) from trackedentitydatavalue tedv join dataelement de on tedv.dataelementid = de.dataelementid where tedv.programstageinstanceid = psi.programstageinstanceid);

drop table trackedentitydatavalue;