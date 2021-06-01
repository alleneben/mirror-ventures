import { Card, CardHeader, CardBody, CardFooter } from '../../components';
import utilstyle from '../../asset/scss/util.module.scss';
import styles from './donate.module.scss';



const Donate = () => {



    return (
        <div className={styles.donate}>
            <Card className={utilstyle.card} id={styles.donation}>
                <CardHeader className={utilstyle.cardheader}>
                    <h5>Donation</h5>
                </CardHeader>
                <form>
                    <CardBody className={utilstyle.cardbody}>
                        {/* <fieldset>
                            <legend>Donation</legend>
                            
                        </fieldset> */}
                    </CardBody>
                    <CardFooter className={utilstyle.cardfooter}>
                        {/* <button type="submit"  className={styles.button}>Submit</button> */}
                    </CardFooter>   
                </form>
            </Card>

            <Card className={utilstyle.card} id={styles.payment}>
                <CardHeader className={utilstyle.cardheader}>
                    <h5>Payment Details</h5>
                </CardHeader>
                <form>
                    <CardBody className={utilstyle.cardbody}>
                        {/* <fieldset>
                            <legend>Payment Details</legend>
                            
                        </fieldset> */}
                    </CardBody>
                    <CardFooter className={utilstyle.cardfooter}>
                        {/* <button type="submit"  className={styles.button}>Submit</button> */}
                    </CardFooter>   
                </form>
            </Card>
        </div>
    )
}


export default Donate;