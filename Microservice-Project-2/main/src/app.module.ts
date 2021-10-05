import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mohan:abcd@cluster0.pwsps.mongodb.net/zomatoo?retryWrites=true&w=majority')],
})
export class AppModule { }
