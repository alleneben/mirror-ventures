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
                <p id={customStyles.forgottenpassword}>Forgotten password?</p>
                <Button btntype="btn" onClick={goToDashboard} btntext={'Log In'} />
                <br/>
                <Button btntype="btn-clear" btntext={'Log in with Google'} icon={<GoogleIcon/>}/>
                <p id={customStyles.createone}>Don't have an account? <span onClick={goToSignUp}>CREATE ONE</span></p>

            </form>
        </div>
    )
}

export default SignIn;