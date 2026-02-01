class vahical {
constructor(name,price){
this.name=name;
this.price = price;
}
move(){
    console.log('ami cholachol korte pari');
    
}

}

class bus extends vahical{
    constructor(name,price,seat){
        super(name,price);
        this.seat = seat
    }
    route(){
        console.log('Rangpur to Dhaka');
        
    }
}
