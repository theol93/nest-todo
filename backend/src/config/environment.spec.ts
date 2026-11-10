import { validateEnvironment } from './environment';
const valid = {
  DATABASE_URL: 'postgresql://user:password@localhost:5432/devpath',
};
describe('environment validation', () => {
  it('provides local defaults', () => {
    expect(validateEnvironment(valid)).toMatchObject({
      PORT: 4000,
      NODE_ENV: 'development',
    });
  });
  it.each([
    { ...valid, PORT: 0 },
    { ...valid, PORT: 65536 },
    { ...valid, FRONTEND_URL: '*' },
    { ...valid, DATABASE_URL: 'https://example.com' },
    { ...valid, DATABASE_URL: 'postgresql://' },
    { ...valid, DATABASE_URL: 'postgresql://host:bogus/db' },
    { ...valid, FRONTEND_URL: 'https://example.com/path' },
    {},
  ])('rejects invalid config %j', (input) => {
    expect(() => validateEnvironment(input)).toThrow();
  });
});
