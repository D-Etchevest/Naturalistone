import {
    Box,
    Table,
    Thead,
    Tbody,
    Text,
    Tr,
    Th,
    Td,
    TableContainer,
    useToast,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



const ModelTr = ({e}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const handleClick = () => {
    //   dispatch(getInvoiceById(e.Naturali_Invoice))
    //   dispatch(getInvoiceProducts(e.Naturali_Invoice))
    //   dispatch( cleanStatePayments())
    //   navigate(`/quotes/${e.Naturali_Invoice}`)
    // }
    
    
    return(
      <Tr 
        // onClick={() => handleClick()} 
        cursor={'pointer'} 
        key={e.Invoice}
        _hover={{
          bg: 'web.navBar',
          color: 'logo.orange'
        }}
        >
        <Td textAlign={'center'}>{e.Invoice}</Td>
        <Td textAlign={'center'}>{e.Date.split('T')[0]}</Td>
        <Td>{e.Error}</Td>
      </Tr>
    )
}

const InvoiceErrorsList = ({invoice_errors}) => {
 
  // const result = useSelector(state=> state.validate_result_quotes)
  // const toast = useToast()
  // const id = 'test-toast'

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

  // const noneSellerInvoices = () => {
  //   if(!seller_invoices.length){
  //     setTimeout(
  //       toast({
  //         id,
  //         title: 'No results found',
  //         description: 'Thers no invoices for this seller',
  //         status: 'warning',
  //         duration: 2000,
  //         isClosable: true,
  //       }), 2000
  //     )
  //     return ([])
  //   }
  //   else return seller_invoices
  // }

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
            <TableContainer>
                <Table color={'web.text'} variant={'simple'} size={'sm'} >
                  <Thead h={'6vh'}>
                    <Tr>
                      <Th color={'web.text2'} w={'5vw'} textAlign={'center'}>Invoice Nº</Th>
                      <Th w={'5vw'} color={'web.text2'} textAlign={'center'}>Date</Th>
                      <Th w={'15vw'} color={'web.text2'} textAlign={'center'}>Error</Th>
                    </Tr>
                  </Thead>
                  <Tbody >
                    { invoice_errors.length ? (
                      invoice_errors.map((e, i) =>{
                        return(
                          <ModelTr key={i} e={e}/>
                        )
                      })
                    ):
                    <Text>No Invoices </Text>}
                  </Tbody>
                </Table>
            </TableContainer> 
            </Box> 
        </Box>
    )
}
export default InvoiceErrorsList;
