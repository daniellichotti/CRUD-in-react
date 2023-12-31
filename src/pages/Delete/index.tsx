import { useContext } from 'react';
import { UsersContext } from '../../contexts/UsersContext';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const deleteUserFormSchema = z.object({
    id: z.number(),
});

type DeleteUserFormInputs = z.infer<typeof deleteUserFormSchema>;

export function Delete() {
    const { users, deleteUser } = useContext(UsersContext);

    const {
        //control,
        register,
        handleSubmit,
        //formState: { isSubmitting },
        reset,
    } = useForm<DeleteUserFormInputs>({
        resolver: zodResolver(deleteUserFormSchema),
    });

    async function handleDeleteUser(data: DeleteUserFormInputs) {
        const { id } = data;
        console.log('ID a ser excluído:', id);

        try {
            // Verifique se o ID existe antes de excluir
            const userExists = users.some((user) => user.id === id);

            if (userExists) {
                await deleteUser({ id });
                console.log('Usuário excluído com sucesso');
                reset();
            } else {
                console.error('Usuário não encontrado.');
            }
        } catch (error) {
            console.error('Erro ao processar exclusão:', error);
        }
    }

    return (
        <div>
            <h1>delete</h1>
            <form onSubmit={handleSubmit(handleDeleteUser)}>
                <input
                    type="text"
                    placeholder="id"
                    required
                    {...register('id')}
                />
                <button type="submit">Deletar</button>
            </form>

            <a href="/">home</a>
        </div>
    );
}
