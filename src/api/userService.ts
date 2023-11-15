import { UserFromPlaceholder, UserModel } from '#models/UserModel';

export const getUsers = async (): Promise<UserModel[]> => {
  const rawData = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: UserFromPlaceholder[] = await rawData.json();

  return data.map((user) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    address: user.address,
    phone: user.phone,
    website: user.website,
    company: user.company,
  }));
};
