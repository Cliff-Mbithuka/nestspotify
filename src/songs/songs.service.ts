import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/createSongDto';

@Injectable()
export class SongsService {
  private readonly songs: CreateSongDto[] = [];

  create(createSongDto: CreateSongDto): CreateSongDto {
    this.songs.push(createSongDto);
    return createSongDto;
  }

  findAll() {
    throw new Error('Error in db while fetching songs');
    return this.songs;
  }
}
