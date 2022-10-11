export type UserItem = {
    id: string;
    avatarUrl: string;
    firstName: string;
    lastName: string;
    userTag: string;
    department:
        | "android"
        | "ios"
        | "design"
        | "management"
        | "qa"
        | "back_office"
        | "frontend"
        | "hr"
        | "pr"
        | "backend"
        | "support"
        | "analytics";
    position: string;
    birthday: string;
    phone: string;
    nextBday?: number;
};

export enum Status {
    LOADING = "loading",
    SUCCESS = "completed",
    ERROR = "error",
}

export type Category =
    | "all"
    | "design"
    | "analytics"
    | "management"
    | "ios"
    | "android"
    | "frontend"
    | "backend"
    | "support"
    | "qa"
    | "back_office"
    | "pr"
    | "hr";

export type SortType = "abc" | "b-day";
