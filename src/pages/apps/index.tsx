import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getApps } from '@/modules/apps/action';
import { RootState } from '@/modules';
import { IApp } from '@/types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { StyledListContainer, StyledTableRow, StyledTableCell } from './ListContainer';

const Apps = () => {
  const apps: IApp[] = useSelector((state: RootState) => state.apps.list);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getAppsData = useCallback(() => dispatch(getApps()), [dispatch]);

  useEffect(() => {
    if (apps.length === 0) {
      getAppsData();
    }
  }, []);

  const handleClickItem = (id: string) => {
    navigate(`/app/${id}`);
  };

  return (
    <StyledListContainer>
      <TableContainer component={Paper}>
        <Table className="table_posts" sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">APPS</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {apps
              .filter((app) => app.publish)
              .map((app: any, idx: number) => (
                <StyledTableRow className="table_row" key={idx} onClick={() => handleClickItem(app.id)}>
                  <StyledTableCell className="table_cell" component="th" scope="row">
                    <div className="table_cell_line title">{app.title}</div>
                    <div className="table_cell_line">{app.desc}</div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledListContainer>
  );
};

export default Apps;
