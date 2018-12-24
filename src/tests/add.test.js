const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Should generate greeting from name', () => {
    expect(
        generateGreeting("Ivan")
    ).toBe("Hello Ivan!");
});

test('Should generate greeting for no name', () => {
    expect(
        generateGreeting()
    ).toBe('Hello Anonymous!');
});
