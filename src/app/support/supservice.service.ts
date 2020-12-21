import { Injectable } from '@angular/core';
@Injectable()

export class SupserviceService {
  constructor() { }
  showTodayDate() {
    const ndate = new Date();
    return ndate;
  }
}
