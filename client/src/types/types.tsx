import React from "react";

export interface IShow {
  isShow: boolean;
}

export interface ISales {
  sales: string[];
  setSales: React.Dispatch<any>;
}

export interface IBtn {
  id?: string;
  ripple: string;
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  marginTop?: string;
  onCLick?: (e: React.MouseEvent) => void;
}

export interface IMyTables {
  date: string;
  setDate: (date: any) => void;
  tables: any[];
  id?: string;
  children: React.ReactNode;
  background?: string;
  width?: string;
  height?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export interface ITables {
  setDate: (date: string) => void;
  tables: any[];
  showHandler: (id: string) => void;
  checkedHandler: (object: any) => void;
}
