
export interface User {
  name: string;
  id: number;
  age: number;
}

export interface Query {
  name: string;
  age: string;
  limit: number;
  offset: number;
}

export interface PaginatorProps {
  totalUsers: number; // Общее количество пользователей
  query: Query; // Текущие параметры запроса
  setQuery: (query: Query) => void; // Функция для обновления параметров запроса
}
export interface InputFormProps {
  query: Query;
  setQuery: (query: Query) => void;
}

export interface UserListProps {
  users: User[];
}

