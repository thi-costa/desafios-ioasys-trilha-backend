import { Module } from '@nestjs/common';
import { OrdersModule } from './Orders/orders.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [OrdersModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
