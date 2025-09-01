import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  Table,
  useReactTable,
} from "@tanstack/react-table";
import {
  PluginEntryPoint,
  RenderTableDataCell,
  RenderTableRow,
  RenderTable,
  RenderTableBody,
  RenderTableFoot,
  RenderTableHead,
  RenderTableHeadCell,
} from "@tanstack-table-aop/react";
import React from "react";

import "./App.css";
import { BodyBGModule } from "./modules/BodyBGModule";
import { HeadBoldIntervalModule } from "./modules/HeadBoldIntervalModule";
import { BodyBoldModule } from "./modules/BodyBoldModule";
import { BodyUnderlineIntervalModule } from "./modules/BodyUnderlineIntervalModule";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("visits", {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
    footer: (info) => info.column.id,
  }),
];
export default function App() {
  const [data] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="p-2">
      <div className="h-4">
        <PluginEntryPoint>
          <HeadBoldIntervalModule />
          <BodyBoldModule />
          <BodyBGModule />
          <BodyUnderlineIntervalModule />
          <TableLayout table={table} />
        </PluginEntryPoint>
      </div>
    </div>
  );
}

const TableLayout = <TData,>({
  table,
}: React.PropsWithChildren<{ table: Table<TData> }>) => {
  return (
    <RenderTable>
      <RenderTableHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <RenderTableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <RenderTableHeadCell key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </RenderTableHeadCell>
            ))}
          </RenderTableRow>
        ))}
      </RenderTableHead>
      <RenderTableBody>
        {table.getRowModel().rows.map((row) => (
          <RenderTableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <RenderTableDataCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </RenderTableDataCell>
            ))}
          </RenderTableRow>
        ))}
      </RenderTableBody>
      <RenderTableFoot>
        {table.getFooterGroups().map((footerGroup) => (
          <RenderTableRow key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <RenderTableHeadCell key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </RenderTableHeadCell>
            ))}
          </RenderTableRow>
        ))}
      </RenderTableFoot>
    </RenderTable>
  );
};
