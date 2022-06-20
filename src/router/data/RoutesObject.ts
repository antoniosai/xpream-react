export interface RoutesObject {
  path: string;
  name: string;
  label: string;
  group?: null | string;
  isPrivate?: boolean;
  isExact?: boolean;
  isDashboardShow: boolean;
  component: React.ComponentType;
  element: JSX.Element;
  icon: React.ComponentType;
  groupset: RoutesObject[];
}
