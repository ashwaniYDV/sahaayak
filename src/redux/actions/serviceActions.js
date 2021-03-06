import { GET_CATEGORY_WISE_SERVICES_PENDING, GET_CATEGORY_WISE_SERVICES_SUCCESS } from './type';
import axios from "axios";

const url = "http://localhost:5000";

export const getCategoryWiseServices = (categoryName) => (dispatch) => {
    dispatch({
        type: GET_CATEGORY_WISE_SERVICES_PENDING
      })   
    axios.get(`${url}/services/categoryName/`+categoryName)
    .then(res =>{
      dispatch({
        type: GET_CATEGORY_WISE_SERVICES_SUCCESS,
        payload: res.data.services
      })
    })
    .catch(err =>{
        if(err)
        console.log(err.response);
        //dispatch(returnErrors(err.response.data,err.response.status,'REGISTER_BUSINESS_FAIL'));
    });
};
