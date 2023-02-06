import { 
    Button, 
    ButtonGroup, 
    IconButton,
    useDisclosure,
    } from "@chakra-ui/react"
import { BsListUl } from 'react-icons/bs';
import DeliveryListModal from "./DeliveryListModal";


const DeliveryListButton = ({user, invoice, deliveries}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
   
  return(
  <>
    <ButtonGroup
      onClick={onOpen}
      display={'flex'}
      spacing={0}
      _hover={{
      color: 'logo.orange'
      }}
      >
      <IconButton
        disabled={(user.SellerID === 3 || user.SellerID === 5) ? false : true }
        variant={'unstyled'}           
        fontWeight={'normal'}
        icon={<BsListUl/>}/>
      <Button
        disabled={(user.SellerID === 3 || user.SellerID === 5) ? false : true }
        variant={'unstyled'}           
        fontWeight={'normal'}
        >Delivery Notes List
      </Button>
    <DeliveryListModal isOpen={isOpen} onClose={onClose} invoice={invoice} deliveries={deliveries}/> 
    </ButtonGroup>
  </>
  )
}

export default DeliveryListButton