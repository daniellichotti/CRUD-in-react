import axios from 'axios';

export const EMPLOYEE_API_BASE_URL = 'http://localhost:3000/users';

export function Delete() {
    const handleSubmit = () => {
        return updateEmployee(1); // returns a Promise
    };

    // function getEmployees() {
    //     return axios.get(EMPLOYEE_API_BASE_URL);
    // }

    // function createEmployee(employee: number) {
    //     return axios.post(EMPLOYEE_API_BASE_URL, employee);
    // }

    // function getEmployeeById(employeeId: number) {
    //     return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }

    function updateEmployee(employee: number, employeeId: number) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    // function deleteEmployee(employeeId: number) {
    //     return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }

    return (
        <div>
            <h1>delete</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="id"
                    required
                    //{...register('id')}
                />
                <button type="submit">Deletar</button>
            </form>

            <a href="/">home</a>
        </div>
    );
}
