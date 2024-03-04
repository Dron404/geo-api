import { IsIP } from 'class-validator';
export class GetLocationByIPQueryDto {
  @IsIP()
  ip: string;
}
