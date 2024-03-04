import { Controller, Get, Query } from '@nestjs/common';
import { GeoService } from './geo.service';
import { GetLocationByIPQueryDto } from './dto/get-location-by-ip-query.dto';

@Controller('geo')
export class GeoController {
  constructor(private geoService: GeoService) {}

  @Get('')
  getLocationByIP(@Query() args: GetLocationByIPQueryDto) {
    return this.geoService.getLocationByIP(args.ip);
  }
}
