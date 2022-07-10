import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCounter } from '../../Features/counter';
import { setRecords } from '../../Features/getProduct';

export const PageNotFound = () => {
  const dispatch = useDispatch();
  const counters = useSelector((state) => state.counter.value);
  // changeCounter(counter+1)
  // console.log("records======>",records);

  // const [records, setRecords] = useState([]);
  const user = useSelector((state) => state.getProduct.value);


  const getData = async () =>{
    axios.get('http://127.0.0.1:8000/api/productapi/')
    .then(res=>{
        console.log("get data",res.data)
        dispatch(setRecords(res.data));        
        for(let i of res.data){
            console.log("i:",i.name)
        }
        
    })
    .catch(error => {
        console.log("error:",error)
    });
};

    useEffect(() =>{
      getData();
    }, []);

    // let disp=Object.keys(counters)
    for(let c of counters){
    console.log(c.name)
  }
    console.log(typeof("counters",counters))

  return (
    <div>
      page not found<br />
      {/* {counter} */}
      {/* <p>name:{user.name}</p>
      <p>city:{user.city}</p> */}
      

      {
            user.map((curElem) => {
                const { id,product_name, regular_price,product_image } = curElem
                // let x=id;
                return (

                <table className="table table-striped" key={id}>
                    

                    <tbody>
                        <tr>
                            <td>{product_name}</td>
                            <td>{regular_price}</td>
                            <td>
                              <img src={product_image} height="50px" width="50px" />
                            </td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                 </table>   


                )
            })
        }


      
    </div>
  )
}
