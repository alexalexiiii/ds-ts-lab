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
