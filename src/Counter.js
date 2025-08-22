export default function handleReducer(counter, action) {
    switch (action.type) {
        case 'add' :
            return action.counter++;
        case 'substract' :
            return action.counter--;
    }
}
