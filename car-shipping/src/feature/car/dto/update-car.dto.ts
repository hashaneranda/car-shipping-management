import { ApiProperty } from '@nestjs/swagger';

export class UpdateCarDto {
  @ApiProperty()
  readonly shippingStatus: string;
}
