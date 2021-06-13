import { useHistory } from 'react-router-dom'
import { Field, Button } from '../../components';
import styles from '../../asset/scss/forms.module.scss';
import customStyles from './signup.module.scss';
import { ReactComponent as GoogleIcon } from '../../asset/icons/search.svg'; 
import { ReactComponent as Logo } from '../../asset/img/logo.svg';


const SignUp = () => {
    let history = useHistory()


    const goToSignIn = () => {
        history.push('/')
    }
    
    const onChange = () => {

    }

    return(
        <div className={customStyles.signup}>
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
                    style={{marginBottom: '10px', height: 50}}
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
                    style={{marginBottom: '10px', height: 50}}
                    disabled={false}
                />
                <Field 
                    label={'Repeat Password'} 
                    id={'repeatpassword'} 
                    type={'repeatpassword'} 
                    placeholder={'**********'} 
                    fieldtype={'tt'} 
                    onChange={onChange}  
                    required={true} 
                    styles={styles} 
                    style={{marginBottom: '10px', height: 50}}
                    disabled={false}
                />
                <Button btntype="btn" btntext={'Sign Up'} />
                <br/>
                <Button btntype="btn-clear" btntext={'Signup with Google'} icon={<GoogleIcon/>}/>
                <p id={customStyles.login}>Already have an account? <span onClick={goToSignIn}>LOG IN</span></p>
            </form>
        </div>
    )
}

export default SignUp;