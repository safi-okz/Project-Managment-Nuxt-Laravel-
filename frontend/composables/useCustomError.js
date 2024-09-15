export default function useCustomError() {
    const errorBag = useState('error-bag', () => ({}));

    function transformValidationError(response, handlerType = 'axios') {
            if(handlerType == 'axios') {
                if(response.data.errors){
                    for(let key in response.data.errors) {
                        errorBag.value[key] = response.data.errors[key][0];
                    }
                }
            }
            console.log('errorr bag  ', errorBag.value);
    }

    function resetErrorBag() {
        errorBag.value = {};
    }

    return {
        errorBag, transformValidationError, resetErrorBag
    }
}