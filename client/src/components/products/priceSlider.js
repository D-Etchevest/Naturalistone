import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Tooltip,
		Box,
		Center,
} from '@chakra-ui/react';
import { useState } from 'react'



let PriceSlider = ({setFilters, filters}) =>{
    const [limit, setLimit] = useState([0, 300])
    const handlePrice = (e) => {
        setLimit(e);
        setFilters({
          ...filters,
          price: e
        })
      }
    
    return(
			<Center
				rounded={'md'} 
				bg={'web.sideBar'} 
				border={'1px solid'} 
				borderColor={'web.border'}
				w={'32vw'}>
        <RangeSlider 
            aria-label={['min', 'max']}
            colorScheme={'orange'}
            value={filters.price}
            onChangeEnd={(val) => console.log(val)}
            onChange={(e) => handlePrice(e)}
            w={'20vw'}
            defaultValue={[0, 300]}
            min={0}
            max={300}
            step={15}
            h={'4vh'}
            >
            <RangeSliderTrack bg={'web.text2'} h={'0.3vh'}>
              <RangeSliderFilledTrack/>
            </RangeSliderTrack>
            <Tooltip
              label={`$${limit[0]}`}
							fontWeight={'normal'}
              bg={'web.sideBar'}
              color="web.text2"
              placement={'left'}
              isOpen
							fontSize={'2vh'}
              >
              <RangeSliderThumb
								boxSize={'1.5vh'} 
                bg={'logo.orange'} 
                index={0}           
                _focus={{
                  borderColor: 'logo.orange',
                  boxShadow: '0 0.5px 0.5px rgba(229, 103, 23, 0.075)inset, 0 0 5px rgba(255,144,0,0.6)'
                }}
                />
            </Tooltip>
            <Tooltip
							fontWeight={'normal'}
              label={`$${limit[1]}`}
							bg={'web.sideBar'}
              color="web.text2"
              placement={'right'}
              isOpen
              fontSize={'2vh'}
              >
              <RangeSliderThumb 
                index={1}
								boxSize={'1.5vh'}  
                bg={'logo.orange'}
                _focus={{
                  borderColor: 'logo.orange',
                  boxShadow: '0 0.5px 0.5px rgba(229, 103, 23, 0.075)inset, 0 0 5px rgba(255,144,0,0.6)'
                }}  
                />
            </Tooltip>
          </RangeSlider>
					</Center>
    )
}

export default PriceSlider