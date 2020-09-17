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
  url = 'https://www.metnow.com/cgi-bin/fcio_data.pl?';
  options: any = {
    crossDomain: true,
    dataType: 'script',
    cache: false,
  };
  constructor(private http: HttpClient) {}
  getData(lat, lon) {
    return this.http.get(this.url + lat + '&' + lon, this.options);
  }
}
