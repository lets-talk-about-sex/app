import React from 'react';
import SliceTextSub from './text+sub';

export const renderSlices = (body) => {
    const slices = body.map(sliceItem => {

console.log(sliceItem);

        switch(sliceItem.type){

            case 'content___heading':
            console.log("fann slice")
                return <SliceTextSub subheader={sliceItem.primary.subheading[0].text} paragraph={sliceItem.primary.text[0].text}/>;
        }

    }).filter(item => !!item)


    console.log("slices:", slices);
    return slices;
}