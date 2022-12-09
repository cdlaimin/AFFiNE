import { styled, textEllipsis } from '@/styles';
import { TableCellProps } from './interface';

export const StyledTable = styled.table<{ tableLayout: 'auto' | 'fixed' }>(
  ({ theme, tableLayout }) => {
    return {
      fontSize: theme.font.base,
      color: theme.colors.textColor,
      tableLayout,
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: '0 25px',
    };
  }
);

export const StyledTableBody = styled.tbody(({ theme }) => {
  return {
    fontWeight: 400,
  };
});

export const StyledTableCell = styled.td<
  Pick<TableCellProps, 'ellipsis' | 'align' | 'proportion'>
>(({ theme, align = 'left', ellipsis = false, proportion }) => {
  const width = proportion ? `${proportion * 100}%` : 'auto';
  return {
    width,
    height: '52px',
    lineHeight: '52px',
    padding: '0 30px',
    boxSizing: 'border-box',
    textAlign: align,
    verticalAlign: 'middle',
    ...(ellipsis ? textEllipsis(1) : {}),
    overflowWrap: 'break-word',
  };
});

export const StyledTableHead = styled.thead(({ theme }) => {
  return {
    fontWeight: 500,
  };
});

export const StyledTableRow = styled.tr(({ theme }) => {
  return {
    marginBottom: '25px',
    td: {
      transition: 'background .15s',
    },
    'td:first-of-type': {
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
    },
    'td:last-of-type': {
      borderTopRightRadius: '10px',
      borderBottomRightRadius: '10px',
    },

    ':hover': {
      td: {
        background: theme.colors.hoverBackground,
      },
    },
  };
});