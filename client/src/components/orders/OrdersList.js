import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    useToast,
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getOrdersByID, getOrderProducts, cleanOrderProducts } from '../../redux/actions-orders'



const ModelTr = ({o}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
      dispatch(getOrdersByID(o.OrderID))
      dispatch(cleanOrderProducts())
      dispatch(getOrderProducts(o.OrderID))
      navigate(`/orders/${o.OrderID}`)
    }
    
   
    return(
      <Tr 
        onClick={() => handleClick()} 
        cursor={'pointer'} 
        key={o.OrderID}
        _hover={{
          bg: 'web.navBar',
          color: 'logo.orange'
        }}
        >
        <Td textAlign={'center'}>{o.OrderID}</Td>
        <Td textAlign={'-moz-initial'}>{o.FactoryName}</Td>
        <Td textAlign={'center'}>{o.Value}</Td>
        <Td textAlign={'center'}>{o.InvoiceDate.split('T')[0]}</Td>
        <Td isNumeric textAlign={'center'}>{o.idFreightInvoice} </Td>
        <Td textAlign={'center'}>{o.Order_By.split('@')[0]}</Td>
        <Td textAlign={'center'}>{o.Status}</Td>
      </Tr>
    )
}

const OrdersList = ({orders}) => {

//   const result = useSelector(state=> state.validate_result_quotes)
//   const toast = useToast()
//   const id = 'test-toast'
  
//   const validateResults = () => {
//     if(result === 'no_results'){
//       if (!toast.isActive(id)) {
//       toast({
//         id,
//         title: 'No results found',
//         description: 'Reloading all the quotes',
//         status: 'warning',
//         duration: 2000,
//         isClosable: true,
//       });
//     }}
//   }


//   useEffect(()=>{
//     validateResults()
//   })
  
    return(
        <Box
        display={'flex'}
        justifyContent={'center'}
        h={'92vh'}
        w={'80vw'}
        >
          <Box
            maxHeight={'80vh'}
            overflow={'auto'}
            mt={'7vh'}
            css={{
              '&::-webkit-scrollbar': {
                width: '0.2vw',
              },
              '&::-webkit-scrollbar-track': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#E47424',
                borderRadius: '5px',
              },
            }}
            borderColor={'web.border'}
            bg={'web.sideBar'} 
            border={'1px solid'} 
            rounded={'md'} 
            p={'3vh'}
            w={'74vw'}
            ml={'3vw'}
            mr={'3vw'}
            >
            <TableContainer >
                <Table color={'web.text'} variant={'simple'} size={'sm'}  >
                  <Thead h={'6vh'}>
                    <Tr>
                      <Th color={'web.text2'} textAlign={'center'} w={'6vw'}>Order N??</Th>
                      <Th color={'web.text2'} textAlign={'center'} w={'12vw'}>Factory</Th>
                      <Th color={'web.text2'} textAlign={'center'} w={'6vw'}>Value</Th>
                      <Th w={'6vw'} color={'web.text2'} textAlign={'center'}>Date</Th>
                      <Th color={'web.text2'} w={'10vw'} textAlign={'center'}>Freight Invoice N??</Th>
                      <Th color={'web.text2'} w={'8vw'} textAlign={'center'}>Order By</Th>
                      <Th color={'web.text2'} w={'8vw'} textAlign={'center'}>Status </Th>
                    </Tr>
                  </Thead>
                  <Tbody 
                  >
                    {
                      orders.map((o, i) => (
                        <ModelTr key={i} o={o}/> 
                        ))
                    }
                  </Tbody>
                </Table>
            </TableContainer> 
            </Box> 
        </Box>
    )
}


export default OrdersList;
