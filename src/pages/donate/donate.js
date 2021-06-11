import { Card, CardHeader, CardBody, CardFooter, Field } from '../../components';
import utilstyle from '../../asset/scss/util.module.scss';
import customStyles from './donate.module.scss';
import styles from '../../asset/scss/forms.module.scss';
import VisaIcon from '../../asset/icons/visa.png'; 
import MasterCardIcon from '../../asset/icons/mastercard.png'; 


const Donate = () => {


    const onChange = () => {
        
    }
    return (
        <div className={customStyles.donate}>
            <Card className={utilstyle.card} id={customStyles.donation} style={{height: "50%"}}>
                <CardHeader className={utilstyle.cardheader}>
                    <h5>Donation</h5>
                </CardHeader>
                <CardBody className={utilstyle.cardbody}>
                    <Field 
                    label={'Amount'} 
                    id={'amount'} 
                    type={'number'} 
                    placeholder={'Enter Amount'} 
                    fieldtype={'tt'} 
                    onChange={onChange} 
                    // value={value} 
                    required={true} 
                    styles={styles} 
                    style={{width: "100%"}}
                    // cstyles={cstyles} 
                    // cb={cb} 
                    disabled={false}
                    />
                </CardBody>
                <CardFooter className={utilstyle.cardfooter}>
                    {/* <button type="submit"  className={styles.button}>Submit</button> */}
                </CardFooter> 
            </Card>

            <Card className={utilstyle.card} id={customStyles.payment} style={{maxWidth: "510px"}}>
                <CardHeader className={utilstyle.cardheader}>
                    <h5>Payment Details</h5>
                </CardHeader>
                <CardBody className={utilstyle.cardbody}>
                    <div className={customStyles.icons}>
                        <img src={MasterCardIcon} alt="MASTERCARD ICON" />
                        <img src={VisaIcon} alt="VISA ICON" />
                    </div>
                    <Field 
                        label={"Cardholder's Name"} 
                        id={'holdername'} 
                        type={'text'} 
                        placeholder={'Jane Do'} 
                        fieldtype={'tt'} 
                        onChange={onChange} 
                        // value={value} 
                        required={true} 
                        styles={styles} 
                        style={{width: "500px"}}
                        // cstyles={cstyles} 
                        // cb={cb} 
                        disabled={false}
                    />
                    <Field 
                    label={'Card Number'} 
                    id={'cardno'} 
                    type={'text'} 
                    placeholder={'4410 ---- ----- ------'} 
                    fieldtype={'tt'} 
                    onChange={onChange} 
                    // value={value} 
                    required={true} 
                    styles={styles} 
                    style={{width: "500px"}}
                    // cstyles={cstyles} 
                    // cb={cb} 
                    disabled={false}
                    />
                    <div className={customStyles.bottom}>
                        <Field 
                        label={'Expiry'} 
                        id={'expiry'} 
                        type={'text'} 
                        placeholder={'6/20'} 
                        fieldtype={'tt'} 
                        onChange={onChange} 
                        // value={value} 
                        required={true} 
                        styles={styles} 
                        style={{width: "230px", marginRight: "20px"}}
                        // cstyles={cstyles} 
                        // cb={cb} 
                        disabled={false}
                        />
                        <Field 
                        label={'CVC'} 
                        id={'cvc'} 
                        type={'text'} 
                        placeholder={'242'} 
                        fieldtype={'tt'} 
                        onChange={onChange} 
                        // value={value} 
                        required={true} 
                        styles={styles} 
                        style={{width: "250px"}}
                        // cstyles={cstyles} 
                        // cb={cb} 
                        disabled={false}
                        />
                    </div>
                </CardBody>
                <CardFooter className={utilstyle.cardfooter}>
                    <button type="submit"  className={styles.button} style={{width: "50%"}}>Pay $10</button>
                </CardFooter>   
            </Card>
        </div>
    )
}


export default Donate;