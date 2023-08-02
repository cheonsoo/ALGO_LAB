select a.id
     , a.name
  from SUBWAY_STATIONS a
 inner join (
            select a.station_id
              from LINE_ROUTES a
             inner join (
                          select max(drive_order) as maxOrd
                            from ( select drive_order  from LINE_ROUTES  group by line_color) b
                        ) b
                on a.drive_order = b.maxOrd
             group by a.station_id
        ) b
    on a.id = b.station_id
order by a.id



select *  from LINE_ROUTES  group by line_color