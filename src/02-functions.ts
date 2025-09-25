
import { Friend, Colleague, ColleagueHistory, EmailContact } from './myTypes';
import { friends, colleagues } from './01-basics';

// function that increments a friend's age
export function older(f: Friend): string {
    f.age += 1;
    return `${f.name} is now ${f.age}`;
}

// increment all friends' ages
export function allOlder(fs: Friend[]) {
    return fs.map(older);
}

// find  colleague w/ the highest extension
export function highestExtension(cs: Colleague[]) {
    return cs.sort((c1, c2) => c1.contact.extension - c2.contact.extension)[cs.length - 1];
}

// add a colleague with extension = highest + 1
export function addColleague(cs: Colleague[], name: string, department: string, email: string) {
    const highestExt = cs.reduce((max, c) => Math.max(max, c.contact.extension), 0);
    cs.push({ name, department, contact: { email, extension: highestExt + 1 } });
}

// using a higher order function: sort colleagues and return name + email
export function sortColleagues(cs: Colleague[], sorter: (c1: Colleague, c2: Colleague) => number): EmailContact[] {
    return cs.sort(sorter).map(c => ({ name: c.name, email: c.contact.email }));
}

// using a higher order function: find friends matching a criterion
export function findFriends(fs: Friend[], predicate: (f: Friend) => boolean) {
    return fs.filter(predicate).map(f => f.name);
}
