export type Sort = {
  sortProperty: string;
  option: boolean;
};

export interface FilterState {
  sort: Sort;
  query: string;
  column: string;
  logic: string;
}
