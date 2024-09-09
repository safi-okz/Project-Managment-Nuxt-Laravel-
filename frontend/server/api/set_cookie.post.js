export default defineEventHandler(async (event) => {
        const { token } = readBody(event);

        setCookie(event, 'token', token, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(new Date.now() + 1000 * 60 * 60 * 24 * 365)
        });

        return {
            message: 'Cookie set Successfully'
        }
})