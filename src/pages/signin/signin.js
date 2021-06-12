import { useHistory } from 'react-router-dom';
import { Field, Button } from '../../components';
import styles from '../../asset/scss/forms.module.scss';
import customStyles from './signin.module.scss';
import { ReactComponent as GoogleIcon } from '../../asset/icons/search.svg'; 
import { ReactComponent as Logo } from '../../asset/img/logo.svg';



const SignIn = () => {
    let history = useHistory()


    const goToSignUp = () => {
        history.push('/signup')
    }

    const goToDashboard = () => {
        history.push('/app/dashboard/watch')
    }

    const onChange = () => {
        
    }

    return(
        <div className={customStyles.signin}>
            <Logo />
            <form> 
                <Field 
                    label={'Email'} 
                    id={'email'} 
                    type={'text'} 
                    placeholder={'Enter your email'} 
                    fieldtype={'tt'} 
                    onChange={onChange} 
                    required={true} 
                    styles={styles}
                    style={{marginBottom: '20px'}}
                    disabled={false}
                />
                <Field 
                    label={'Password'} 
                    id={'password'} 
                    type={'password'} 
                    placeholder={'**********'} 
                    fieldtype={'tt'} 
                    onChange={onChange} 
                    required={true} 
                    styles={styles}
                    disabled={false}
                />
                <p style={{marginTop: 0,marginBottom: 30, textAlign: 'right', cursor: 'pointer', color: '#0380D6', fontWeight: 500}}>Forgotten password?</p>
                <Button styles={styles.button} onClick={goToDashboard} btntext={'Log In'} />
                <br/>
                <Button styles={styles.buttonClear} btntext={'Log in with Google'} icon={<GoogleIcon/>}/>
                <p>Don't have an account? <span onClick={goToSignUp}>CREATE ONE</span></p>

            </form>
        </div>
    )
}

export default SignIn;