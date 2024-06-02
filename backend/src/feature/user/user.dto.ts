import { UserEntity } from './user.entity';

export type UserDto = {
  Id: string;
  Name: string;
  Gender: string;
  EntranceYearMonth: number;
};

export const convertToDto = (data: UserEntity): UserDto => {
  const userDto: UserDto = {
    Id: data.Id,
    Name: data.Name,
    Gender: data.Gender,
    EntranceYearMonth: data.EntranceYearMonth,
  };
  return userDto;
};
