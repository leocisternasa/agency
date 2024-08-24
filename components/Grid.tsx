'use client';
import { AgGridReact, CustomCellRendererProps } from 'ag-grid-react';
import { ColDef, ColGroupDef, ValueGetterParams } from 'ag-grid-community';
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
    { field: 'medal_date', headerName: 'Date' },
    {
      field: 'medal_type',
      headerName: 'Medal Type',
      cellRenderer: MedalRenderer,
    },
    { field: 'name', headerName: 'Name' },
    { field: 'gender', headerName: 'Gender' },
    { field: 'country', headerName: 'Country' },
    { field: 'country_code', headerName: 'Country code' },
    { field: 'nationality', headerName: 'Nationality' },
    { field: 'team', headerName: 'Team' },
    { field: 'team_gender', headerName: 'Team gender' },
    { field: 'discipline', headerName: 'Discipline' },
    { field: 'event', headerName: 'Event' },
    { field: 'event_type', headerName: 'Event type' },
    { field: 'birth_date', headerName: 'Birth date' },
  ]);
  return (
    // wrapping container with theme & size
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: 500, width: '100%' }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact rowData={data} columnDefs={colDefs} />
    </div>
  );
};

export default Grid;
