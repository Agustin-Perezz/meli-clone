
export interface modelProduct {
    basic_info:      BasicInfo;
    pictures:        string[];
    seller:          Seller;
    list_attributes: ListAttributes;
    description:     string[];
    list_questions:  ListQuestions;
    reviews:         Reviews;
}

export interface BasicInfo {
    title:          string;
    condition:      string;
    price:          string;
    installaments:  string;
    sold_quantity:  number;
    total_reviews:  number;
    rating_average: number;
    free_shipping:  boolean;
    country_id: string;
}

export interface ListAttributes {
    previewAttribute: Attribute[];
    attributes:       Array<Attribute[]>;
    images:           Images;
}

export interface Attribute {
    name:  string;
    value: string;
}

export interface Images {
    mercado_credit_url: string;
    credit:             string[];
    debit:              string[];
    efectivo:           string[];
}

export interface ListQuestions {
    previewQuestion: Question;
    questions:       Question[];
}

export interface Question {
    question: string;
    answer:   string;
}

export interface Reviews {
    rating_average_fixed: string;
    total_reviews:        number;
    rating_levels:        RatingLevel[];
    list_reviews:         ListReviews;
}

export interface ListReviews {
    all_reviews:      Review[];
    positive_reviews: Review[];
    negative_reviews: Review[];
}

export interface Review {
    title:        string;
    content:      string;
    date_created: string;
    rate:         number;
    likes:        number;
    dislikes:     number;
    porcentage:   number;
}

export interface RatingLevel {
    value:            number;
    porcentage_width: string;
}

export interface Seller {
    nickname:           string;
    location:           Location;
    reputation:         string;
    transactions:       Transactions;
    transactions_total: string;
}

export interface Location {
    city:     string;
    province: string;
}

export interface Transactions {
    canceled:  number;
    completed: number;
    period:    string;
    ratings:   Ratings;
    total:     number;
}

export interface Ratings {
    negative: number;
    neutral:  number;
    positive: number;
}
