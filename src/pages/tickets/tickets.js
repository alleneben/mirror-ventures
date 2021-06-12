import { DataTable, Button } from '../../components';
import styles from '../../asset/scss/forms.module.scss';

const Tickets = () => {

    const initConfig={
        name:'All Tickets',
        header: ['Ticket ID', 'Ticket price', 'Purchase Date', 'Due Date'],
        fieldnames:[{n:'ticketID',f:'t'},{n:'ticketPrice',f:'t'},{n:'purchasedate',f:'t'},{n:'duedate',f:'t'}],
    }
    const data = [
        {'ticketID':1873999, 'ticketPrice': '$23.00', 'purchasedate':'20-12-2020', 'duedate':'12-12-2021'},
        {'ticketID':7489391, 'ticketPrice': '$23.00', 'purchasedate':'20-12-2020', 'duedate':'12-12-2021'},
        {'ticketID':3462781, 'ticketPrice': '$23.00', 'purchasedate':'20-12-2020', 'duedate':'12-12-2021'},
        {'ticketID':9372781, 'ticketPrice': '$23.00', 'purchasedate':'20-12-2020', 'duedate':'12-12-2021'}
    ]


    return (
        <div>
            <Button styles={styles.button} btntext={'Buy Ticket'} style={{width: '200px', float: 'right'}}/>

            <DataTable config={initConfig} data={ data }/>
        </div>
    )
}


export default Tickets;