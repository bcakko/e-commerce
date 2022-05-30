import { Categories } from "./Categories.types";

export interface ISearchBarProps {
    mainWidth: string,
    mainBorderColor: string,
    mainTextColor: string,
    mainBgColor: string,
    inputTextColor: string,
    inputBgColor: string,
    inputPlaceholderColor: string
}

export interface IUserNavProps {
    iconColor: string
}

export interface INavBarProps {
    ddData: Categories
}