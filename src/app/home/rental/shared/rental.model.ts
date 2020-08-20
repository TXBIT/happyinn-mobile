import { Booking } from './../../../booking/shared/booking.model';
import { Review } from './../../../review/shared/review.model';

export class Rental {
  static readonly CATEGORIES = ['house', 'apartment', 'condo'];

  // tslint:disable-next-line:variable-name
  _id: string;
  title: string;
  city: string;
  street: string;
  category: string;
  image: string;
  bedrooms: number;
  description: string;
  dailyRate: number;
  shared: boolean;
  createdAt: string;
  bookings: Booking[];
  user: any;
  reviews: Review[];

  constructor() {
    this._id = '';
    this.title = '';
    this.city = '';
    this.street = '';
    this.category = '';
    this.image = '';
    this.bedrooms = 0;
    this.description = '';
    this.dailyRate = 0;
    this.shared = false;
    this.createdAt = '';
    this.bookings = [];
    this.user = {};
    this.reviews = [];
  }
}
