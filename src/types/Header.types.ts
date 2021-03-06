import { Movie } from "./Movies.types"
import { Show } from "./Shows.types"

export interface ISearchBarProps {
    mainWidth: string,
    mainBorderColor?: string,
    mainTextColor: string,
    mainBgColor?: string,
    inputTextColor: string,
    inputBgColor?: string,
    inputPlaceholderColor: string
}

export interface IUserNavProps {
    iconColor: string
}

export interface IDropdownProps {
    ddTitle: string | JSX.Element,
    ddTitleStyle: string,
    ddTitleHoverColor: string,
    ddList: IDropdownListItem,
    ddListStyle: string,
    ddBackgroundColor: string,
    ddStyle: string
}

export interface IDropdownListItem {
    title: string,
    links: IDropdownCategory[]
}

export interface IDropdownCategory {
    title: string,
    main_path: "movie" | "tv" | string | null,
    sub_path?: string | null,
    data_action?(): void
}

export interface IMiniDropDownProps {
    data_fav?: (Movie | Show)[],
    data_style?: string
}