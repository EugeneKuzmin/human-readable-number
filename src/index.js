module.exports = function toReadable (n) {
    const ones = [
            {digit:'0',str:'zero'},
            {digit:'1',str:'one'},
            {digit:'2',str:'two'},
            {digit:'3',str:'three'},
            {digit:'4',str:'four'},
            {digit:'5',str:'five'},
            {digit:'6',str:'six'},
            {digit:'7',str:'seven'},
            {digit:'8',str:'eight'},
            {digit:'9',str:'nine'},
        ]

        const teens = [
            {digit:'10',str:'ten'},
            {digit:'11',str:'eleven'},
            {digit:'12',str:'twelve'},
            {digit:'13',str:'thirteen'},
            {digit:'14',str:'fourteen'},
            {digit:'15',str:'fifteen'},
            {digit:'16',str:'sixteen'},
            {digit:'17',str:'seventeen'},
            {digit:'17',str:'eighteen'},
            {digit:'18',str:'eighteen'},
            {digit:'19',str:'nineteen'},
        ]

        const decimals = [
            {digit:'0',str:''},
            {digit:'2',str:'twenty'},
            {digit:'3',str:'thirty'},
            {digit:'4',str:'forty'},
            {digit:'5',str:'fifty'},
            {digit:'6',str:'sixty'},
            {digit:'7',str:'seventy'},
            {digit:'8',str:'eighty'},
            {digit:'9',str:'ninety'},
        ]

        const nstr = n.toString();
        let humanString = ''

        for (let index = 0; index < nstr.length; index++) {
            const element = nstr[nstr.length-1-index];
            if(index === 0){
                humanString = ones.find(x=>x.digit === element).str
            }
            if(index === 1){
                if(humanString.trim() === 'zero'){
                    humanString = ''
                }
                if(element === '1'){
                    humanString = teens.find(x=>x.digit === element+nstr[nstr.length-index]).str
                }else if(element!= '0'){
                   
                    humanString = decimals.find(x=>x.digit === element).str + ' ' + humanString
                } 
            }
            if(index === 2){
                humanString = ones.find(x=>x.digit === element).str + ' hundred ' + humanString
            }
        }

        return humanString.trim()
  
}
