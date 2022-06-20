export interface RoutesObject {
  index?: boolean;
  path: string;
  name: string;
  group?: null | string;
  element: React.ReactNode;
  isPrivate?: boolean;
  isExact?: boolean;
  isDrawerMenu: boolean;
  component?: React.ComponentType;
  icon?: React.ComponentType;
  groupset?: RoutesObject[];
}