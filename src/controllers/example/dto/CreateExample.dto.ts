import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateExampleRequestDto {
  @IsString()
  @ApiProperty({
    description: 'The name of the new example',
  })
  name: string;
}

export class CreateExampleResponseDto {
  @ApiProperty({
    example: 1,
    description: 'The ID of the example',
  })
  id: number;

  @ApiProperty({
    example: 'Test',
    description: 'The name of the example',
  })
  name: string;
}
