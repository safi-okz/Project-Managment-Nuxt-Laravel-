export default function useAuth () {

    const user = useState('auth-user', () => null);

    const errorBag = useState('auth-error-bag', () => ({
        email: '',
        password: '',
        password_confirmation: '',
        name: ''
    }));

    const { api, csrf } = useAxios();

    function me() {
        api.get('/api/me').then(({data}) => {
            console.log('data meeee ', data);
        })
    }

    function login(userForm) {
            csrf().then(() => {
                api.post('/login', userForm).then(({data}) => {
                    console.log('data login ', data);
                }).catch(err => console.log('error login ', err.response.data));
            })
    }

    function logout() {

    }

    function register(userForm) {
        csrf().then(() => {
            api.post('/login', userForm).then(({data}) => {
                console.log('data register ', data);
            }).catch(err => console.log('error register ', err.response.data));
        })
    }

    return {
        login, logout, register, errorBag, user, me
    }
}