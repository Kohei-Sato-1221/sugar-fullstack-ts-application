export type UserEntity = {
  Id: string;
  Name: string;
  Gender: string;
  EntranceYearMonth: number;
};

export const convertToEntity = (data: Record<string, any>): UserEntity => {
  const userEntity = {} as UserEntity;
  userEntity.Id = data.Item?.Id;
  userEntity.Name = data.Item?.Name;
  userEntity.Gender = data.Item?.Gender;
  userEntity.EntranceYearMonth = data.Item?.EntranceYearMonth;
  return userEntity;
};
