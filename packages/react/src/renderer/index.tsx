/* eslint-disable @typescript-eslint/no-namespace */

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      $TanstackAopTable: JSX.IntrinsicElements["table"];
      $TanstackAopTableCaption: JSX.IntrinsicElements["caption"];
      $TanstackAopTableHead: JSX.IntrinsicElements["thead"];
      $TanstackAopTableHeadRow: JSX.IntrinsicElements["th"];
      $TanstackAopTableBody: JSX.IntrinsicElements["tbody"];
      $TanstackAopTableRow: JSX.IntrinsicElements["tr"];
      $TanstackAopTableCell: JSX.IntrinsicElements["td"];
      $TanstackAopTableFoot: JSX.IntrinsicElements["tfoot"];
      $TanstackAopTableColGroup: JSX.IntrinsicElements["colgroup"];
      $TanstackAopTableCol: JSX.IntrinsicElements["col"];
    }
  }
}
export {
  $TanstackAopTable,
  $TanstackAopTableBody,
  $TanstackAopTableCaption,
  $TanstackAopTableCell,
  $TanstackAopTableCol,
  $TanstackAopTableColGroup,
  $TanstackAopTableFoot,
  $TanstackAopTableHead,
  $TanstackAopTableHeadRow,
  $TanstackAopTableRow,
} from "./AOPTableRenderer";
