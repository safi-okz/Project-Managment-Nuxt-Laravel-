export default function useError() {
    const errorBag = useState('error-bag', () => ({}));

    function transformValidationError(response, handlerType = 'axios') {
            if(handlerType == 'axios') {
                if(response.data.errors){
                    for(let key in response.data.errors) {
                        errorBag.value[key] = response.data.errors[key][0];
                    }
                }
            }
    }

    function resetErrorBag() {
        
    }

    return {
        errorBag, transformValidationError, resetErrorBag
    }
}