import { HomeContainer } from './styles';

export function Home() {
    return (
        <div>
            <HomeContainer>
                <a href="create">Create</a>
                <a href="read">Read</a>
                <a href="update">Update</a>
                <a href="delete">Delete</a>
            </HomeContainer>
        </div>
    );
}
