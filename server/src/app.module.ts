import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {}),
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),

    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
