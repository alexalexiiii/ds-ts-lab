import { Friend, Colleague, EmailContact } from './myTypes';
import { friends, colleagues } from './01-basics';

// incrementing a friend's age
export function older(f: Friend): string {
    f.age += 1;
    return `${f.name} is now ${f.age}`;
}

// incrementing all friends' ages
export function allOlder(fs: Friend[]) {
    return fs.map(older);
}

// function to get highest extension
export function highestExtension(cs: Colleague[]) {
    return cs.sort((c1, c2) => c1.contact.extension - c2.contact.extension)[cs.length - 1];
}

// this function adds a colleague with extension = highest + 1
export function addColleague(cs: Colleague[], name: string, department: string, email: string) {
    const highestExt = cs.reduce((max, c) => Math.max(max, c.contact.extension), 0);
    cs.push({ name, department, contact: { email, extension: highestExt + 1 } });
}

// function to sor colleagues with optional max parameter
export function sortColleagues(
    cs: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max?: number
): EmailContact[] {
    let end = cs.length;
    if (max !== undefined) {
        end = max < 2 ? 1 : max;
    }
    const sorted = cs.sort(sorter);
    const fullResult = sorted.map(c => ({ name: c.name, email: c.contact.email }));
    return fullResult.slice(0, end);
}

// function to fin friends matching a criterion
export function findFriends(fs: Friend[], predicate: (f: Friend) => boolean) {
    return fs.filter(predicate).map(f => f.name);
}

// function to add an interest to a friend
export function addInterest(f: Friend, interest: string): string[] {
    if (!f.interests) {
        f.interests = [];
    }
    f.interests.push(interest);
    return f.interests;
}

