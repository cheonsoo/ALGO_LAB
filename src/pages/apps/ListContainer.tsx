import styled from 'styled-components';

import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const StyledListContainer = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;

  li {
    width: 85%;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    border: 1px solid gray;
    border-radius: 8px;
    margin-bottom: 10px;
    cursor: pointer;
    padding: 10px 20px;

    > div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: left;
    }

    > div:nth-child(1) {
      font-weight: 900;
      margin-bottom: 10px;
    }
    > div:nth-child(1) {
    }
  }
`;

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#3E957B',
    color: '#fff',
    fontWeight: '900',
    borderRadius: '8px 8px 0 0'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

export const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover
    backgroundColor: '#eeeeee'
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));
