

import { Field, Button } from '../../components';
import styles from '../../asset/scss/forms.module.scss';
import customStyles from './signup.module.scss';



const SignUp = () => {


    return(
        <div className={customStyles.signin}>
            <h1>Sign Up</h1>
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
                    id={'password'} 
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
                <Field 
                    label={'Repeat Password'} 
                    id={'repeatpassword'} 
                    type={'repeatpassword'} 
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
                <Button styles={styles.button} btntext={'Sign Up'} />
            </form>
        </div>
    )
}

export default SignUp;