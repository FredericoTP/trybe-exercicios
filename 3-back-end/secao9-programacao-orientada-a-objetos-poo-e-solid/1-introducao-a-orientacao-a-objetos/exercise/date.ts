class DayDate {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(d: number, m: number, y: number) {
    this._day = d;
    this._month = m;
    this._year = y;
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }
}