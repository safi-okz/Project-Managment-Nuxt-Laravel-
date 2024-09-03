export default function useAuth () {

    const user = useState('auth-user', null);

    const errorBag = useState('auth-error-bag', {
        email: '',
        password: '',
        password_confirmation: '',
        name: ''
    })

    function login() {

    }

    function logout() {

    }

    function register() {

    }

    return {
        login, logout, register
    }
}