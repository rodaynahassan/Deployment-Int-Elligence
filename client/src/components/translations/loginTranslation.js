import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
	en: {
		loginTitle: 'Login',
		email: 'Email',
		forgot: 'Forgot Password?',
		member: 'Not a member?',
		signup: 'Signup',
		valid: 'Looks good!',
		invalid: 'Please enter a valid email',
		password: 'Password',
		loginbutton: 'Login',
		hintemail: 'Enter your Email',
		hintpassword: 'Enter your Password'
	},
	ar: {
		loginTitle: 'تسجيل الدخول',
		email: 'البريد الإلكتروني ',
		forgot: 'نسيت كلمة السر',
		member: 'لست عضو',
		signup: 'سجل دخول',
		valid: 'تبدو جيدا!',
		invalid: 'يرجى إدخال البريد الإلكتروني الصحيح',
		password: 'كلمة السر',
		loginbutton: 'تسجيل الدخول',
		hintemail: 'ادخل البريد الالكتروني',
		hintpassword: 'ادخل كلمة السر'
	}
});
export default strings;
