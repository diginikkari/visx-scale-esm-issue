import { describe, it, expect } from 'vitest';
import { scaleUtc } from '@visx/scale';

describe('App', () => {
    it('should show the correct format as UTC time for the given scale', () => {
        const scale = scaleUtc({
            domain: [
                new Date('2020-01-01T00:00:00.000Z'),
                new Date('2020-01-02T00:00:00.000Z'),
            ],
        });
        const format = scale.tickFormat();
        expect(format(new Date('2020-01-01T00:00:00.000Z'))).toEqual('2020');
    });
});
