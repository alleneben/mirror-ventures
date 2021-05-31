import { useHistory } from 'react-router-dom';
import { Field, Button } from '../../components';
import styles from '../../asset/scss/forms.module.scss';
import customStyles from './signin.module.scss';
import { ReactComponent as GoogleIcon } from '../../asset/icons/search.svg'; 


const SignIn = () => {
    let history = useHistory()


    const goToSignUp = () => {
        history.push('/signup')
    }

    const onChange = () => {
        
    }

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
                    onChange={onChange} 
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
                    onChange={onChange} 
                    // value={value} 
                    required={true} 
                    styles={styles} 
                    // cstyles={cstyles} 
                    // cb={cb} 
                    disabled={false}
                />
                <Button styles={styles.button} btntext={'Log In'} />
                <br/>
                <Button styles={styles.buttonClear} btntext={'Signin with Google'} icon={<GoogleIcon/>}/>
                <p style={{ cursor: 'pointer'}} onClick={goToSignUp}>Got SignUp (For testing)</p>
            </form>
        </div>
    )
}

export default SignIn;