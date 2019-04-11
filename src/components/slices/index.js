import React from 'react';
import SliceTextSub from './text+sub';
import SliceMedia from './media';
import SliceText from './text';
import SliceRepeat from './repeat';
import { RichText, Link } from 'prismic-reactjs';

export const renderSlices = (body) => {
    const slices = body.map(sliceItem => {

    console.log(sliceItem);

        switch(sliceItem.type){

            case 'content___heading':
                return <SliceTextSub subheader={RichText.asText(sliceItem.primary.subheading)} paragraph={RichText.asText(sliceItem.primary.text)}/>;

            case 'content':
                return <SliceText text={RichText.render(sliceItem.primary.text)}/>;

            case 'media':
                return <SliceMedia image={sliceItem.primary.media.url}/>;

            case 'repeat':
            return <SliceRepeat repeat={sliceItem.primary.repeat.didyouknow.text}/>;

        }

    }).filter(item => !!item)


    console.log("slices:", slices);
    return slices;
}