
import { Field, Button } from '../../components';
import styles from '../../asset/scss/forms.module.scss';
import customStyles from './signin.module.scss';

const SignIn = () => {


    return(
        <div className={customStyles.signin}>
            <h1>Sign In</h1>
            <form> 
                <Field 
                    label={'Email'} 
                    id={'email'} 
                    type={'text'} 
                    placeholder={'Enter your email'} 
                    fieldtype={'tt'} 
                    onchange={onchange} 
                    // value={value} 
                    required={true} 
                    styles={styles} 
                    // cstyles={cstyles} 
                    // cb={cb} 
                    disabled={false}
                />
                <Field 
                    label={'Password'} 
                    id={'email'} 
                    type={'password'} 
                    placeholder={'**********'} 
                    fieldtype={'tt'} 
                    onchange={onchange} 
                    // value={value} 
                    required={true} 
                    styles={styles} 
                    // cstyles={cstyles} 
                    // cb={cb} 
                    disabled={false}
                />
                <Button styles={styles.button} btntext={'Log In'} />
            </form>
        </div>
    )
}

export default SignIn;