import {
    ReactNode,
    createContext,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { api } from '../lib/axios';

interface User {
    id: number;
    name: string;
    profissao: string;
    datanasc: string;
    telefone: string;
}

interface CreateUserInput {
    name: string;
    profissao: string;
    datanasc: string;
    telefone: string;
}

interface DeleteUserInput {
    id: number;
}

interface UsersContextType {
    users: User[];
    fetchUsers: (query?: string) => Promise<void>;
    createUser: (data: CreateUserInput) => Promise<void>;
    deleteUser: (data: DeleteUserInput) => Promise<void>;
}

interface UsersProviderProps {
    children: ReactNode;
}

export const UsersContext = createContext({} as UsersContextType);

export function UsersProvider({ children }: UsersProviderProps) {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = useCallback(async (query?: string) => {
        {
            const response = await api.get('users', {
                params: {
                    _sort: 'createdAt',
                    _order: 'desc',
                    q: query,
                },
            });

            setUsers(response.data);
        }
    }, []);

    const createUser = useCallback(async (data: CreateUserInput) => {
        const { name, profissao, datanasc, telefone } = data;

        const response = await api.post('users', {
            name,
            profissao,
            datanasc,
            telefone,
        });

        setUsers((state) => [response.data, ...state]);
    }, []);

    const deleteUser = useCallback(async (data: DeleteUserInput) => {
        const { id } = data;

        console.log('Tentando excluir usuário com ID:', id);

        try {
            await api.delete(`users/${id}`);
            console.log('Usuário excluído com sucesso');
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
        }

        // Atualize o estado excluindo o usuário com base no ID
        setUsers((state) => state.filter((user) => user.id !== id));
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <UsersContext.Provider
            value={{ users, fetchUsers, createUser, deleteUser }}
        >
            {children}
        </UsersContext.Provider>
    );
}
