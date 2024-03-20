import { IsUrl } from 'class-validator';

export class CreateUrlsDto {
  @IsUrl()
  url: string;
}
