import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CanBeUndefined } from './can-be-undefined';

export class UpdateTaskDto {
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  @CanBeUndefined()
  title: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @CanBeUndefined()
  description?: string;

  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  @CanBeUndefined()
  isCompleted: boolean;
}