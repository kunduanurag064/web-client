
export function userAuthentication() {
    const isAuthenticatedUser = localStorage.getItem('token');

    if (isAuthenticatedUser) {
        return true;
    }
    return false;
}
