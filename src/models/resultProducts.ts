
export interface ObjectResponse {
    basic_info:        BasicInfo;
    result_products:   ResultProduct[];
    categories:        string[];
    available_filters: AvailableFilter[];
    available_sorts:   AvailableSort[];
}

export interface AvailableFilter {
    id:     string;
    name:   string;
    type:   string;
    values: Value[];
}

export interface Value {
    id:      string;
    name:    string;
    results: number;
}

export interface AvailableSort {
    id:   string;
    name: string;
}

export interface BasicInfo {
    query: string;
    total: number;
}

export interface ResultProduct {
    id:            string;
    title:         string;
    price:         string;
    picture:       string;
    free_shipping: boolean;
    full:          boolean;
    condition:     Condition;
    installments:  boolean | number;
    offert:        false | OffertClass;
}

export enum Condition {
    New = "new",
}

export interface OffertClass {
    amount:           string;
    regular_amount:   string;
    offer_percentaje: number;
}