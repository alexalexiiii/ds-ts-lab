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



