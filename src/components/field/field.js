
// import { api } from '../../store';




const Field = (props) => {
    
    // const [combo, setcombo] = useState([])
    const { styles, label, fieldtype } = props;

    // const onmousedown = (e) => {
        // if(typeof cb === 'object') {
        //     let c = cb.map((rd,key) => <option key={key} value={rd.rid}>{rd.nam}</option>)
        //     setcombo(c)
        // } else {

        //     let fm = new FormData()
        //     fm.append('s','cb');
        //     fm.append('a','combo')
        //     fm.append('df',cb)
        //     fm.append('m','l');
        //     fm.append('c',api.fxns.DB)
        //     api.fxns.combo(fm,api.fxns.endpoint)
        //     .then(rd => {
        //         let c = rd.sd.map((rd,key) => <option key={key} value={rd.rid}>{rd.nam}</option>)
        //         setcombo(c)
        //     })
        // }
    // }

    return(
        <div className={styles.formitem}>
            <label>{ label }</label>
            {
                fieldtype === 'tt' ?
                    <input {...props} /> 
                    : fieldtype === 'ta' ?
                    <textarea {...props}/>
                    : fieldtype === 'fl' ?
                    <input {...props}/> 
                    :
                    <>
                    <select {...props}>
                        <option value="">Choose</option>
                        { [] }
                    </select>
                    <div className="combo">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                    </div>
                    </>

            }
        </div>
    )
}


export default Field;