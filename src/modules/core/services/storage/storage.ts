export const isAuthenticated = () => {
    return localStorage.getItem('user') ? true : false;
}

export const login = (user: any) => {
    localStorage.setItem('user', '');
}