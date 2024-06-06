import { fetchCountries } from './countryService';

beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({
                status: 'OK',
                'status-code': 200,
                version: '1.0',
                access: 'public',
                total: 249,
                offset: 0,
                limit: 100,
                data: {
                    DZ: { country: 'Algeria', region: 'Africa' },
                    AO: { country: 'Angola', region: 'Africa' },
                },
            }),
        })
    );
});

test('fetchCountries returns a list of countries', async () => {
    const countries = await fetchCountries();
    expect(countries).toEqual(['Algeria', 'Angola']);
});
