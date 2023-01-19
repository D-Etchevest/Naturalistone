import { Box, Text } from "@chakra-ui/react"
import CancerlOrderModal from './cancelOrderModal'

const OrderDetailList = ({order}) => {

  return(
    <>
      <Box
        className={'order-details'}
        mt={'3vh'}
        ml={'2vw'}
        mr={'1vw'}
        pl={'2vw'}
        pt={'1.5vw'}
        pr={'2vw'}
        pb={'1.5vw'}
        h={'42vh'}
        w={'30vw'}
        display={'flex'}
        flexDir={'column'}
        color={'web.text'}
        bg={'web.sideBar'}
        border={'1px solid'} 
        rounded={'md'} 
        borderColor={'web.border'} 
        >        
        <Box 
          display={'flex'} 
          flexDir={'row'} 
          alignItems={'baseline'}
          justifyContent={'space-between'}
          >
          <Box
           display={'flex'} 
           flexDir={'row'} 
           alignItems={'baseline'}>
            <Text 
            color={'logo.orange'} 
            fontSize={'xl'}>
              {order[0].OrderID}
            </Text>
            <Text 
              color={'web.text2'} 
              ml={'1vh'}>
              Order Details
            </Text>
          </Box>
          <CancerlOrderModal order={order}/>  
        </Box>
        <Box 
          mt={'1vh'} 
          display={'flex'} 
          flexDir={'row'} 
          justifyContent={'space-around'} 
          h={'44vh'}
          >
          <Box
            display={'flex'}
            flexDir={'column'}
            justifyContent={'space-around'}
            w={'10vw'}
            >
            <Box>
              <Text 
                fontSize={'xs'} 
                color={'web.text2'}> 
                  Factory name
              </Text>
              <Text 
                fontSize={'sm'} 
                fontWeight={'bold'}>
                  {order[0].FactoryName}
              </Text>
            </Box>
            <Box>
              <Text 
                fontSize={'xs'} 
                color={'web.text2'}>
                  Ordered By
              </Text>
              <Text 
                fontSize={'sm'}
                w={'12vw'} 
                fontWeight={'bold'}>
                  {order[0].Order_By.split('@')[0]}
              </Text>
            </Box>
            <Box>
              <Text 
                color={'web.text2'} 
                fontSize={'xs'}>
                  Date
              </Text>
              <Text 
                fontSize={'sm'} 
                fontWeight={'bold'}>
                  {order[0].InvoiceDate.split('T')[0]}
              </Text>
            </Box>
            <Box>
              <Text 
                color={'web.text2'} 
                fontSize={'xs'}>
                  Date
              </Text>
              <Text 
                fontSize={'sm'} 
                fontWeight={'bold'}>
                  {order[0].InvoiceDate.split('T')[0]}
              </Text>
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDir={'column'}
            justifyContent={'space-around'}
            w={'10vw'}>
            <Box>
              <Text 
                  fontSize={'xs'} 
                  color={'web.text2'}>
                  Freight Invoice
              </Text>
              <Text 
                fontSize={'sm'} 
                fontWeight={'bold'}>
                {order[0].idFreightInvoice == null ? '-' : order[0].idFreightInvoice}
              </Text>
            </Box>
            <Box>
              <Text 
                fontSize={'xs'} 
                color={'web.text2'}>
                Status
              </Text>
              <Text 
                fontSize={'sm'} 
                fontWeight={'bold'}>
                  {order[0].Status}
              </Text>
            </Box>
            <Box>
              <Text 
                color={'web.text2'} 
                fontSize={'xs'}>
                  Value
              </Text>
              <Text 
                fontSize={'sm'} 
                fontWeight={'bold'}>
                  ${order[0].Value}
              </Text>
            </Box>
            <Box>
            <Text 
                color={'web.text2'} 
                fontSize={'xs'}>
                Payment
              </Text>
              <Text 
                fontSize={'sm'} 
                fontWeight={'bold'}>
                { order[0].Payment == null ? '-' : order[0].Payment }
              </Text>
            </Box>
          </Box>
        </Box>
      </Box> 
    </>
  )
}

export default OrderDetailList