import { Friend, Colleague, EmailContact } from './myTypes';
import { friends, colleagues } from './01-basics';

// Typed function signature
function older(f: Friend): string {
    f.age += 1;
    return `${f.name} is now ${f.age}`;
}

console.log(older(friends[0]));

// Function: increment all friends' ages
function allOlder(fs: Friend[]) {
    return fs.map(f => older(f));
}

console.log(allOlder(friends));

// Highest extension (type inference)
function highestExtension(cs: Colleague[]) {
    const result = cs.sort((c1, c2) => c1.contact.extension - c2.contact.extension);
    return result[cs.length - 1];
}

console.log(highestExtension(colleagues.current));

// Add colleague
function addColleague(cs: Colleague[], name: string, department: string, email: string) {
    const highestExt = cs.reduce((max, c) => Math.max(max, c.contact.extension), 0);
    cs.push({ name, department, contact: { email, extension: highestExt + 1 } });
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

// Higher-order function: sortColleagues
function sortColleagues(
    cs: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
    const sorted = cs.sort(sorter);
    return sorted.map(c => ({ name: c.name, email: c.contact.email }));
}

console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

// Higher-order function: findFriends
function findFriends(fs: Friend[], predicate: (f: Friend) => boolean) {
    return fs.filter(predicate).map(f => f.name);
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
