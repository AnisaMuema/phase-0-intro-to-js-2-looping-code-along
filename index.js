// Code your solutions in this filefor (let index = 0; index < array.length; index++) {
    function writeCards(namesArray, eventName) {
        const newArray = []
        for (let i = 0; i < namesArray.length; i++) {
        newArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`)
        }
        return newArray;
        
    }

    function countDown(number) {
        while(number >= 0){
            console.log(number--);
        }

    }
    