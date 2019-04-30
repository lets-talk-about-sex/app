const CheckIfMatchesTags = (tagsArray, activefilter) => {
    if(activefilter === ''){
        return true
    }
    for (let i = 0;  i < tagsArray.length;i++) {
        console.log(tagsArray[i])
        if(activefilter === tagsArray[i]) {
            return true;
        } 
    }
}

export {CheckIfMatchesTags};