import { useContext } from 'react';
import { DivContainer, TableContainer } from './styles';
import { UsersContext } from '../../contexts/UsersContext';

export function Read() {
    const { users } = useContext(UsersContext);

    return (
        <DivContainer>
            <TableContainer>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Profissão</th>
                        <th>Data Nascimento</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.profissao}</td>
                                <td>{user.datanasc}</td>
                                <td>{user.telefone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </TableContainer>

            <a href="/">home</a>
        </DivContainer>
    );
}
