import { describe, test, expect } from '@jest/globals';

describe('Example Test Suite', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('string contains correct text', () => {
    const str = 'Hello, Jest!';
    expect(str).toContain('Jest');
  });

  test('object assignment', () => {
    interface TestData {
      one: number;
      two?: number;
    }
    const data: TestData = { one: 1 };
    data.two = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});
