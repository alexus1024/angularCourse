export class CounterService{
    counter = 0;
    inc(){
        this.counter++;
        console.log('Counter is now', this.counter)
    }
}