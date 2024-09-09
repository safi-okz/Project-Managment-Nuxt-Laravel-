export default function useAuth () {

    const user = useState('auth-user', () => null);

    // const errorBag = useState('auth-error-bag', () => ({
    //     email: '',
    //     password: '',
    //     password_confirmation: '',
    //     name: ''
    // }));

    const { errorBag, transformValidationError, resetErrorBag } = useError();

    const { api, csrf } = useAxios();

    async function me() {
       await api.get('/api/me').then(({data}) => {
            console.log('data meeee ', data);
            user.value = data;
        });
    }

    function login(userForm) {
        resetErrorBag();
            csrf().then(() => {
                api.post('/login', userForm).then(({data}) => {
                    console.log('data login ', data);
                    // Route Dashboard
                    user.value = data.user;
                    $fetch('/api/set_cookie', {
                        method: 'POST',
                        body:{token: data.token}
                    })
                    .then(() => navigateTo('/dashboard'));
                    // navigateTo('/dashboard');
                }).catch(err => {
                    console.log('error login ', err.response)
                    transformValidationError(err.response)
                });
            })
    }

    function logout() {
            api.post('/logout').then(() => {
                user.value = null;
                $fetch('/api/logout', {
                    method: 'POST'
                }).then(res => navigateTo('/'));
            })
    }

    function register(userForm) {
        resetErrorBag();
        csrf().then(() => {
            api.post('/register', userForm).then(({data}) => {
                console.log('data register ', data);
                // Verify Email

            }).catch(err => {
                console.log('error register ', err.response)
                transformValidationError(err.response)
            });
        })
    }

    return {
        login, logout, register, errorBag, user, me
    }
}