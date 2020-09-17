import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CoreDataService {
  url = '/assets/faqs.json';
  options: any = {
    crossDomain: true,
    dataType: 'JSON',
    cache: false,
  };
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.url, this.options);
  }
}
