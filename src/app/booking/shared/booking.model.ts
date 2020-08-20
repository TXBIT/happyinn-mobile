import { Rental } from './../../home/rental/shared/rental.model';
import { Review } from './../../review/shared/review.model';

export class Booking {
  static readonly DATE_FORMAT = 'YYYY-MM-DD';

  // tslint:disable-next-line: variable-name
  _id: string;
  startAt: string;
  endAt: string;
  totalPrice: number;
  guests: number;
  days: number;
  paymentToken: any;
  createdAt: string;
  rental: Rental;
  review: Review;

  constructor() {
    this._id = '';
    this.startAt = '';
    this.endAt = '';
    this.totalPrice = 0;
    this.guests = 0;
    this.days = 0;
    this.paymentToken = '';
    this.createdAt = '';
    this.rental = new Rental();
    // this.review = {
    //   text: '',
    //   rating: 3
    // };
  }
}
