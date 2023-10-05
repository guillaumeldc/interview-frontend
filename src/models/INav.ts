import React from "react";

export interface INav {
    id: string;
    path: string;
    element: React.ReactNode | null;
    title: string;
    icon?: string;
    description?: string;
    children?: INav[];
    hideItem?: boolean;
    badgeCount?: number;
    roles?: string[];
    authorities?: string[];
}