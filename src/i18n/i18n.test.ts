import { describe, expect, test } from "vitest";
import i18n from './i18n';
import subDays from "date-fns/subDays";

describe('i18n', () => {
    test('interpolation works', () => {
        const result = i18n.t('key', { what: 'i18next', how: 'great' });
        expect(result).toBe('i18next is great');
    })
    test('ago works', () => {
        const OneWeekAgo = subDays(new Date(), 7);
        const result = i18n.t('date.ago', { date: OneWeekAgo })
        expect(result).toBe('7 days ago');
    });
})
