import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

interface ValidatorResults {
  [key: string]: boolean;
}

export class MyValidators {
  static restrictedMailServers(control: FormControl): ValidatorResults {
    const { value } = control;
    if (['mail.ru', 'yandex.ru'].some(domain => (value || '').includes(domain))) {
      return {
        restrictedMailDomain: true
      };
    }
    return null;
  }

  static uniqEmail(control: FormControl): Promise<ValidatorResults> | Observable<ValidatorResults> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.by') {
          resolve({ uniqEmail: true });
        }

        return resolve(null);
      }, 5000);
    });
  }
}
