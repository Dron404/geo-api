import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { lookup } from 'geoip-lite';

@Injectable()
export class GeoService {
  constructor() {}

  getLocationByIP(ip: string) {
    try {
      const locationData = lookup(ip);
      if (!locationData) {
        throw new NotFoundException('No data for this ip');
      }
      const { country, city, ll } = locationData;
      return { country, city, lat: ll[0], lng: ll[1] };
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
}
