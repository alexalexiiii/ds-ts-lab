import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, FriendPartial } from "./myTypes";

// update friend function, used to update existing friend  
function updateFriend(friend: Friend, updates: FriendPartial): Friend {
    return { ...friend, ...updates };
}

console.log("Updated friend:", updateFriend(friends[0], {
    phone: '08712345',
    dob: new Date("1998-10-22")
}));

interface EventPass {
    name: string;
    department: string;
    passCode: number;
}

// event pass function, generate pass code 
function generateEventPass(colleague: Colleague): EventPass {
    const passCode = Math.floor(Math.random() * 1000) + 1;
    return {
        name: colleague.name,
        department: colleague.department,
        passCode
    };
}

console.log("Event pass:", generateEventPass(colleagues.current[0]));


// intersection function, combine both friend and colleague type in array
function intersection(
    friends: Friend[],
    colleagues: Colleague[]
): Array<Friend & Colleague> {
    return friends.reduce((res: Array<Friend & Colleague>, friend) => {
        const colleague = colleagues.find(col => col.name === friend.name);
        if (colleague) {
            // merge Friend & Colleague properties
            res.push({ ...friend, ...colleague });
        }
        return res;
    }, []);
}


console.log("Intersection:", intersection(friends, colleagues.current));

// sort function used to sort over arry without mutating the original array
function sortArray<T>(arr: T[], criterion: (a: T, b: T) => number): T[] {
    const copy = [...arr];         
    return copy.sort(criterion);
}


console.log("Friends sorted by age:", sortArray(friends, (a, b) => a.age - b.age));


console.log("Colleagues sorted by extension:", sortArray(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));






