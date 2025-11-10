import {
  Controller,
  Get,
  Param,
  Patch,
  Delete,
  Post,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/createSongDto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return `find song with id ${typeof id}`;
  }

  @Patch(':id')
  update(@Param('id') id: number) {
    return `update song with id ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return `delete song with id ${id}`;
  }
}
