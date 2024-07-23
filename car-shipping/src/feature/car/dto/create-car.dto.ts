import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty()
  readonly make: string;

  @ApiProperty()
  readonly model: string;

  @ApiProperty()
  readonly year: number;

  @ApiProperty()
  readonly shippingStatus: string;
}
