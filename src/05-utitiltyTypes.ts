import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend {
  return { ...friend, ...updates}
}

function generateEventPass(colleague: Colleague): EventPass {
  const passCode = Math.round(Math.random() * (1000 - 1) + 1);
  return {
    name: colleague.name,
    department: colleague.department,
    passCode: passCode,
  };
}
console.log(generateEventPass(colleagues.current[0]));
function intersection(
  friends: Friend[],
  colleagues: Colleague[]
): Array<Friend & Colleague> {  // Intersection type
  return friends.reduce((res: Array<Friend & Colleague>, friend) => {
    const colleague = colleagues.find((col) => col.name === friend.name);
    if (colleague) {
      res.push({ ...friend, ...colleague });
    }
    return res;
  }, []);
}

console.log(intersection(friends, colleagues.current));

function sortFriend<>




console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}))

import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend {
  return { ...friend, ...updates}
}

console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}))
