import { HTMLAttributes, ReactNode } from "react";

export interface CustomToastProps {
  isOpen: boolean;
  setIsOpen: any;
  text: string;
}

export interface PagesContainerProps extends HTMLAttributes<HTMLDivElement> {
  metaTitle?: string;
  children: ReactNode;
  metaDescription?: string;
}

export interface ParentSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  handleClick?: any;
}

export interface PagesSheetsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  customToolbar?: ReactNode;
  fullScreen?: boolean;
  title?: string;
  footer?: ReactNode;
}

export interface PagesHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  backUrl?: string;
  enableNavigation?: boolean;
  rightNavbar?: ReactNode;
  customNavbar?: ReactNode;
}
