'use client';
import { AgGridReact, CustomCellRendererProps } from 'ag-grid-react';
import { ColDef, ColGroupDef, ValueGetterParams } from 'ag-grid-community';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useState } from 'react';
import Image from 'next/image';
import data from '../data/medallists.json';
import goldMedal from '../public/img/gold.png';
import silverMedal from '../public/img/silver.png';
import bronzeMedal from '../public/img/bronze.png';

const MEDAL_IMAGE_MAPPER = {
  'Gold Medal': goldMedal,
  'Silver Medal': silverMedal,
  'Bronze Medal': bronzeMedal,
} as const;

type MedalImage = keyof typeof MEDAL_IMAGE_MAPPER;

const MedalRenderer = (props: CustomCellRendererProps) => {
  console.log(props);
  return (
    <div className="flex">
      <Image
        src={MEDAL_IMAGE_MAPPER[props.data.medal_type as MedalImage]}
        alt="gold medal"
        width={35}
        height={35}
      />
      {props.data.medal_type}
    </div>
  );
};

const Grid = () => {
  const [rowData, setRowData] = useState([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ]);

  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: 'medal_date', headerName: 'Date', filter: true },
    {
      field: 'medal_type',
      headerName: 'Medal Type',
      cellRenderer: MedalRenderer,
      filter: true,
    },
    { field: 'name', headerName: 'Name', filter: true },
    { field: 'gender', headerName: 'Gender', filter: true },
    { field: 'country', headerName: 'Country', filter: true },
    { field: 'country_code', headerName: 'Country code', filter: true },
    { field: 'nationality', headerName: 'Nationality', filter: true },
    { field: 'team', headerName: 'Team', filter: true },
    { field: 'team_gender', headerName: 'Team gender', filter: true },
    { field: 'discipline', headerName: 'Discipline', filter: true },
    { field: 'event', headerName: 'Event', filter: true },
    { field: 'event_type', headerName: 'Event type', filter: true },
    { field: 'birth_date', headerName: 'Birth date', filter: true },
  ]);
  return (
    <div className="ag-theme-quartz" style={{ height: 500, width: '100%' }}>
      <AgGridReact
        rowData={data}
        columnDefs={colDefs}
        sideBar={{
          toolPanels: [
            {
              id: 'columns',
              labelDefault: 'Columns',
              labelKey: 'columns',
              iconKey: 'columns',
              toolPanel: 'agColumnsToolPanel',
            },
            {
              id: 'filters',
              labelDefault: 'Filters',
              labelKey: 'filters',
              iconKey: 'filter',
              toolPanel: 'agFiltersToolPanel',
            },
          ],
        }}
      />
    </div>
  );
};

export default Grid;
