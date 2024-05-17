import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUrlsDto } from './dto/create-urls.dto';
import { Url } from './entities/url.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { generateRandomString } from 'src/shared/functions/generateRandomString';

@Injectable()
export class UrlsService {
  constructor(@InjectRepository(Url) private readonly repo: Repository<Url>) {}

  async shortUrl(url: CreateUrlsDto) {
    const existingUrl = await this.repo.findOne({
      where: { originalUrl: url.url },
    });

    if (existingUrl) {
      return { url: `${process.env.API_HOST}/${existingUrl.shortUrl}` };
    }

    const randomChars = generateRandomString(6);
    const urlPair = this.repo.create();

    urlPair.originalUrl = url.url;
    urlPair.shortUrl = randomChars;

    await this.repo.save(urlPair);
    return { url: `${process.env.API_HOST}/${urlPair.shortUrl}` };
  }

  async redirect(shortUrl: string) {
    const urlPair = await this.repo.findOneBy({ shortUrl });
    if (!urlPair) throw new BadRequestException('Invalid URL');
    return urlPair.originalUrl;
  }
}
