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
  onCLick?: () => void;
}

export interface IMyTables {
  id?: string;
  children: React.ReactNode;
  width?: string;
  height?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export interface ILarge {
  tableId?: string;
  largeTable?: any[];
  large: (object: any) => void;
}
