export let flagLanguage = 'English';

export const setFlagLanguage = (item:any) => {
    flagLanguage = item;
}

export const languages = {
    'English': {
        username: 'Username...',
        email: 'Email...',
        password: 'Password...',
        confirm_password: 'Confirm Password...',
        address: 'Address...',
        register_link_tip: 'If you have an account already, please log in.',
        register: 'Register',
        login_link_tip: 'If you have no account yet, please register.',
        log_in: 'Log In'
    },
    'Arabic' : {
        username: 'اسم المستخدم...',
        email: 'بريد إلكتروني...',
        password: 'كلمة المرور...',
        confirm_password: 'تأكيد كلمة المرور...',
        address: 'عنوان...',
        register_link_tip: 'إذا كان لديك حساب بالفعل ، يرجى تسجيل الدخول.',
        register: 'يسجل',
        login_link_tip: 'إذا لم يكن لديك حساب بعد ، يرجى التسجيل.',
        log_in: 'تسجيل الدخول'
    },
    'French' : {

    }
}
