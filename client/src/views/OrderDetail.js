import React, { useEffect } from "react";
import SideBar from "../components/sideBar";
import { Center, Spinner, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getInvoiceById, getInvoiceProducts } from '../redux/actions-invoices'
import {getEmployeeById } from "../redux/actions-employees";
import { getPayments } from "../redux/actions-payments";
import { useParams } from "react-router-dom";
import ODetail from "../components/orders/orderDetail/ODetail";



const OrderDetail = () => {

  const dispatch = useDispatch()
  const user = useSelector(state=>state.user)
  const invoice = useSelector(state=>state.invoice)
  const invoice_products = useSelector(state=> state.invoice_products)
  const payments = useSelector(state => state.payments_by_id)
  const userLocal = JSON.parse(localStorage.getItem('user'))
  const { id } = useParams()

  useEffect(()=>{
      dispatch(getInvoiceById(id))
      dispatch(getPayments(id))
      dispatch(getInvoiceProducts(id))} 
      ,[])

  useEffect(()=>{
      if(userLocal && !user.length){
      dispatch(getEmployeeById(userLocal.SellerID))}
    },[user])

    if(user) {
      if(user.length){
        return(
          <>
            <SideBar user={user}/>
            {
              invoice.length && Object.entries(payments).length && invoice_products ? (
                <ODetail 
                  invoice={invoice} 
                  invoice_products={invoice_products}
                  payments={payments}
                  user={ user[0]}
                  />
                ):(
                <Center ml={'20vh'} bg={'web.bg'} h={'92vh'}>
                  <Spinner thickness={'4px'} size={'xl'} color={'logo.orange'}/>
                </Center>
                )
            }
          </>
        )
    }else return (<Text>Loading </Text>)
  }}
 


export default OrderDetail