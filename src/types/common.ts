import { Query, User } from "../api/api";

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
