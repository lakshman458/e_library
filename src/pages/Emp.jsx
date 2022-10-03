import {React,useState} from 'react';

const Emp = () => {

    const [state, setstate] = useState(false);
    return (
        <div>
            ejfwehuirhfuheudshuejf
            {state ?  <h5 style={{color:"white"}}>hello </h5>:<h5 style={{color:"white"}}>hai</h5>}
          <button onClick={()=>setstate(true)}> click me</button>
        </div>
    );
}

export default Emp;

