import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

// test evocations
// console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
// console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))
