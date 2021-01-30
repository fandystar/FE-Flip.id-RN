

const currencyFormat = (item) => {
    return 'Rp ' + item.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

const dateFormat =(item) =>{
    let months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
    let day= item[8]+item[9]
    let year=item[0]+item[1]+item[2]+item[3]
    let m= parseInt(item[5]+item[6])-1
    let month =months[m]
    return day+' '+month+' '+year    
}

module.exports={currencyFormat,dateFormat}