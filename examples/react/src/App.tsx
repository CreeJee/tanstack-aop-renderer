import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  Table,
  useReactTable,
} from "@tanstack/react-table";
import {
  TanstackAopTableComposition,
  TanstackAopTableTableBody,
  TanstackAopTableTableHead,
  useAopTableCompositionProps,
} from "@tanstack-table-aop/react";
import React, {
  RefCallback,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";

import "./App.css";

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
const BodyBoldModule = () => {
  const ref: RefCallback<HTMLTableSectionElement> = useCallback((ref) => {
    console.log(ref);
  }, []);
  return <TanstackAopTableTableBody className="bold" ref={ref} />;
};
const HeadBoldModule = () => {
  const [state, setState] = useState<boolean>(false);
  useLayoutEffect(() => {
    const timer = setInterval(() => {
      setState((prev) => !prev);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const ref: RefCallback<HTMLTableSectionElement> = useCallback((ref) => {
    console.log(ref);
  }, []);

  return (
    <TanstackAopTableTableHead
      className={`bold ${state === true ? "check" : "not-check"}`}
      ref={ref}
    />
  );
};
const BodyBGModule = () => {
  return <TanstackAopTableTableBody className="bg-green" />;
};
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
        <TanstackAopTableComposition>
          <HeadBoldModule />
          <BodyBoldModule />
          <BodyBGModule />
          <TableLayout table={table} />
        </TanstackAopTableComposition>
      </div>
    </div>
  );
}

const TableLayout = <TData,>({
  table,
}: React.PropsWithChildren<{ table: Table<TData> }>) => {
  const { headProps, bodyProps } = useAopTableCompositionProps();
  return (
    <table>
      <thead {...headProps}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...bodyProps}>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};
