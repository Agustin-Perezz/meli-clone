
export interface modelProduct {
  basic_info:  BasicInfo;
  pictures:    string[];
  seller:      Seller;
  attributes:  Array<Attribute[]>;
  description: string[];
  questions:   any[];
  reviews:     Reviews;
}

export interface Attribute {
  name:  string;
  value: string;
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
}

export interface Reviews {
  rating_average: number;
  total_reviews:  number;
  rating_levels:  RatingLevels;
  group_reviews:  GroupReview[];
}

export interface GroupReview {
  title:        string;
  content:      string;
  date_created: string;
  rate:         number;
  likes:        number;
  dislikes:     number;
  type:         string;
}

export interface RatingLevels {
  one_star:   number;
  two_star:   number;
  three_star: number;
  four_star:  number;
  five_star:  number;
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
