import dayjsDefault from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import localeData from 'dayjs/plugin/localeData';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import utc from 'dayjs/plugin/utc';
import weekOfYear from 'dayjs/plugin/weekOfYear';

/*
Short explanation: Module augmentation is done here so we don't have to import the plugins in each vu.

Longer explanation: When you extend dayjs with a plugin, it imports that plugin's methods into
the build. It also augments the dayjs module with the added typescript definitions from the plugin (https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation).
Because shared is built and baked into each "vu", we don't need to extend dayjs in each project, but we do need the TS compiler
to recognize the added methods.
*/
declare module 'dayjs' {
  interface Dayjs {
    utc(keepLocalTime?: boolean): dayjsDefault.Dayjs;
    local(): dayjsDefault.Dayjs;
    isUTC(): boolean;
    utcOffset(offset: number, keepLocalTime?: boolean): dayjsDefault.Dayjs;
    dayOfYear(): number;
    dayOfYear(value: number): dayjsDefault.Dayjs;
    quarter(): number;
    quarter(quarter: number): dayjsDefault.Dayjs;
    isSameOrBefore(
      date: string | number | Date | dayjsDefault.Dayjs,
      unit?: string,
    ): boolean;
    isSameOrAfter(
      date: string | number | Date | dayjsDefault.Dayjs,
      unit?: string,
    ): boolean;
    duration(input?: string | number | object, unit?: string): plugin.Duration;
    isBetween(
      a: ConfigType,
      b: ConfigType,
      c?: OpUnitType | null,
      d?: '()' | '[]' | '[)' | '(]',
    ): boolean;
  }
}
dayjsDefault.extend(advancedFormat);
dayjsDefault.extend(quarterOfYear);
dayjsDefault.extend(utc);
dayjsDefault.extend(isSameOrBefore);
dayjsDefault.extend(isSameOrAfter);
dayjsDefault.extend(dayOfYear);
dayjsDefault.extend(duration);
dayjsDefault.extend(customParseFormat);
dayjsDefault.extend(weekOfYear);
dayjsDefault.extend(isBetween);
dayjsDefault.extend(localeData);

export { dayjsDefault as dayjs };
