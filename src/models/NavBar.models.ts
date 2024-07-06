import { NavBarLinkTypes } from "../enumerations/NavBar.enums";

export interface NavBarLinkTemplate {
  label: string;
  href: string;
  type: NavBarLinkTypes;
}

export interface NavBarSocialsTemplate {
  src: string;
  href: string;
}
