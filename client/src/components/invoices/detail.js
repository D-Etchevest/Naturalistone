import {Box, Text} from '@chakra-ui/react';
import EditButtons from '../editButtons';
import { useState } from 'react';
import PdfVisual from '../pdf/pdfiVisual';


const Detail = ({invoice}) => {

	const [pdf, setPdf ] = useState('')

    return(
      <Box
       bg={'web.bg'} display={'flex'} flexDir={'column'} ml={'20vw'} h={'92vh'} justifyContent={'space-between'}>
				
      	<Box ml={'4vw'} mt={'6vh'}>
        	<Text fontSize={'xl'}>Invoice Details</Text>
					<Text fontSize={'5xl'}>{invoice[0].Naturali_Invoice}</Text>
        
				<Box ml={'4vw'} mt={'6vh'}>
        	<Text fontSize={'md'}>Customer: {invoice[0].CustomerID}</Text>
					<Text fontSize={'md'}>Amount: ${invoice[0].Value}</Text>
					<Text fontSize={'md'}>Date: {invoice[0].InvoiceDate.split('T')[0]}</Text>
					<Text fontSize={'md'}>Payment Status: {invoice[0].PaymentStatus === null ? 'Unpaid' : 'Paid'}</Text>
					<Text fontSize={'md'}>Payment Method: {invoice[0].PaymentMethod === null ? '-' : invoice[0].PaymentMethod}</Text>
					<Text fontSize={'md'}>Shipping Method: {invoice[0].ShippingMethod === null ? '-' : invoice[0].ShippingMethod}</Text>
        </Box>
				</Box>
				<Box>
				<EditButtons invoice={invoice} setPdf={setPdf}/>  
				</Box>
				<PdfVisual/>      
        </Box>
    )
}
export default Detail;