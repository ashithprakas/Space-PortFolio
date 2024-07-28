import { NavBarLinkTypes } from "../enumerations/NavBar.enums";

export interface NavBarLinkTemplate {
  label: string;
  href: string;
  type: NavBarLinkTypes;
}

export interface SocialsTemplate {
  src: string;
  href: string;
}
