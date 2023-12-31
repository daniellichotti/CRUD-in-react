import { useContext } from 'react';
import { FormContainer, MainContainer } from './styles';
import { UsersContext } from '../../contexts/UsersContext';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const newUserFormSchema = z.object({
    name: z.string(),
    profissao: z.string(),
    telefone: z.string(),
    datanasc: z.string(),
});

type NewUserFormInputs = z.infer<typeof newUserFormSchema>;

export function Create() {
    const { createUser } = useContext(UsersContext);

    const {
        //control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<NewUserFormInputs>({
        resolver: zodResolver(newUserFormSchema),
    });

    async function handleCreateNewUser(data: NewUserFormInputs) {
        const { name, profissao, datanasc, telefone } = data;

        await createUser({
            name,
            profissao,
            datanasc,
            telefone,
        });

        reset();
    }

    return (
        <div>
            <MainContainer>
                <FormContainer onSubmit={handleSubmit(handleCreateNewUser)}>
                    <h1>Create</h1>

                    <input
                        type="text"
                        placeholder="Nome"
                        required
                        {...register('name')}
                    />
                    <input
                        type="text"
                        placeholder="Nascimento"
                        required
                        {...register('datanasc')}
                    />
                    <input
                        type="text"
                        placeholder="Profissão"
                        required
                        {...register('profissao')}
                    />
                    <input
                        type="text"
                        placeholder="Telefone"
                        required
                        {...register('telefone')}
                    />
                    <button type="submit" disabled={isSubmitting}>
                        Adicionar
                    </button>
                    <button disabled={isSubmitting}>
                        <a href="/">Back</a>
                    </button>
                </FormContainer>
            </MainContainer>
        </div>
    );
}
