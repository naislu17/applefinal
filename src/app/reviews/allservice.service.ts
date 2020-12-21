import {LoggingService} from './logging.service';
import {Review} from './customer';
import {Injectable} from '@angular/core';

@Injectable()
export class AllserviceService {

  constructor(private loggingService: LoggingService) {
  }

  getReview() {
    let review: Review[];
    review = [{name: 'Айсана', rev: 'У меня проблемы с паролем. Как я могу их решить?'},
      {name: 'Алмат', rev: 'Что делать, если забыл свой AppleID?'},
      {name: 'Маша', rev: 'Почему-то мой телефон сильно зависает. Что можно сделать, чтобы решить данную проблему?'},
      {name: 'Амина', rev: 'Как можно обновить IOS?'},
      {name: 'Айлина', rev: 'Как можно поменять пароль, если забыла старый?'},
      {name: 'Марат', rev: 'Какой сервис работает завтра?'}
    ];

    return review;
  }
}
