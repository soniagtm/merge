import { merge } from './merge';

test('merge two sorted collections into one sorted collection', () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [0, 2, 4, 6];
    const expected = [0, 1, 2, 3, 4, 5, 6, 7];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
});

test('merge two collections having the first collection empty into one sorted collection', () => {
    const collection1: number[] = [];
    const collection2 = [0, 2, 4, 6];
    const expected = [0, 2, 4, 6];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
});

test('merge two collections having the second collection empty into one sorted collection', () => {
    const collection1 = [1, 3, 5, 7];
    const collection2: number[] = [];
    const expected = [1, 3, 5, 7];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
});

test('merge two duplicate collections into one sorted collection', () => {
    const collection1 = [0, 1, 2, 3];
    const collection2 = [0, 1, 2, 3];
    const expected = [0, 0, 1, 1, 2, 2, 3, 3];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
});