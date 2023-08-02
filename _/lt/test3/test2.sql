SELECT SS.id as ID, SS.name as NAME
FROM SUBWAY_STATIONS SS
  INNER JOIN (
    SELECT LR.station_id
    FROM LINE_ROUTES LR
      INNER JOIN (
        SELECT max(DRIVE_ORDER) AS maxOrd
        FROM (
          SELECT DRIVE_ORDER FROM LINE_ROUTES GROUP BY line_color
        ) DO2
      ) DO ON LR.DRIVE_ORDER = DO.maxOrd
    GROUP BY LR.station_id
  ) LR_DO ON SS.id = LR_DO.station_id
