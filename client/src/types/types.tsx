import React from "react";

export interface IShow {
  isShow: boolean;
}

export interface IShowHandler {
  id: string;
  onClick?: (event: React.MouseEvent) => void;
}

export interface ISales {
  sales: string[];
  setSales: React.Dispatch<any>;
}
