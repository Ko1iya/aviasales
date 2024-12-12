/* eslint-disable @typescript-eslint/no-explicit-any */
export interface filterState {
  [key: string]: boolean;
  all: boolean;
  without: boolean;
  one: boolean;
  two: boolean;
  three: boolean;
}

export interface filterAction {
  type: string;
  payload: any;
}

export interface sortState {
  sort: 'cheap' | 'fast' | 'optimal';
}
