import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { UrlsService } from './urls.service';
import { CreateUrlsDto } from './dto/create-urls.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Post('/generateUrl')
  async create(@Body() createUrlDto: CreateUrlsDto) {
    return await this.urlsService.shortUrl(createUrlDto);
  }

  @Get(':shortUrl')
  @Redirect()
  async redirect(@Param('shortUrl') shortUrl: string) {
    const url = await this.urlsService.redirect(await shortUrl);
    return { statusCode: HttpStatus.FOUND, url };
  }
}
