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

export interface IDropdownProps {
    ddTitle: string | JSX.Element,
    ddTitleStyle: string,
    ddTitleHoverColor: string,
    ddList: string[],
    ddListStyle: string,
    ddBackgroundColor: string
}

export interface IMiniDropDownProps {
    ddUser?: string[]
}