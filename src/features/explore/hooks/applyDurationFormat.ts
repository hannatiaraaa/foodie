import moment from 'moment';

type TTimeUnit =
  | 'years'
  | 'months'
  | 'weeks'
  | 'days'
  | 'hours'
  | 'minutes'
  | 'seconds';
enum UNIT_TIME_LEVEL {
  years,
  months,
  weeks,
  days,
  hours,
  minutes,
  seconds,
}

/**
 * A function to humanize and make a duration readable using Moment.js.
 *
 * @param value — Duration value
 * @param unit - Time unit of the duration value
 * @param maxUnit - Maximum unit to display
 * @param separator - The separator between the displayed units
 *
 * @example
 * applyDurationFormat(660, 'minutes'); // Output: 11 hours
 * applyDurationFormat(65, 'seconds'); // Output: 1 min 5 secs
 * applyDurationFormat(0, 'hours'); // Output: 0 hour
 * applyDurationFormat(6000, 'seconds', 'years', ','); // Output: 1 hour, 40 mins
 * applyDurationFormat(6000, 'seconds', 'minutes'); // Output: 100 mins
 *
 */
export const applyDurationFormat = (
  value: number,
  unit: TTimeUnit = 'seconds',
  maxUnit: TTimeUnit = 'years',
  separator: string = '',
) => {
  if (value === 0) {
    return 0 + ' ' + unit.slice(0, -1);
  } else {
    const duration = moment.duration(value, unit);
    const unitLevel = UNIT_TIME_LEVEL[maxUnit];

    const years = duration.years();

    const parts = [];
    if (years && unitLevel === 0) {
      parts.push(`${years} ${years <= 1 ? 'year' : 'years'}`);
    }

    if (unitLevel <= 1) {
      const months = duration.months();
      const asMonths = Math.floor(duration.asMonths());
      const numberOfMonths = unitLevel === 1 ? asMonths : months;
      if (numberOfMonths) {
        parts.push(
          `${numberOfMonths} ${numberOfMonths <= 1 ? 'month' : 'months'}`,
        );
      }
    }

    if (unitLevel <= 2) {
      const weeks = duration.weeks();
      const asWeeks = Math.floor(duration.asWeeks());
      const numberOfWeeks = unitLevel === 2 ? asWeeks : weeks;
      if (numberOfWeeks) {
        parts.push(`${numberOfWeeks} ${numberOfWeeks <= 1 ? 'week' : 'weeks'}`);
      }
    }

    if (unitLevel <= 3) {
      const days = duration.days();
      const asDays = Math.floor(duration.asDays());
      const numberOfDays = unitLevel === 3 ? asDays : days;
      if (numberOfDays) {
        parts.push(`${numberOfDays} ${numberOfDays <= 1 ? 'day' : 'days'}`);
      }
    }

    if (unitLevel <= 4) {
      const hours = duration.hours();
      const asHours = Math.floor(duration.asHours());
      const numberOfHours = unitLevel === 4 ? asHours : hours;
      if (numberOfHours) {
        parts.push(`${numberOfHours} ${numberOfHours <= 1 ? 'hour' : 'hours'}`);
      }
    }

    if (unitLevel <= 5) {
      const minutes = duration.minutes();
      const asMinutes = Math.floor(duration.asMinutes());
      const numberOfMinutes = unitLevel === 5 ? asMinutes : minutes;
      if (numberOfMinutes) {
        parts.push(
          `${numberOfMinutes} ${numberOfMinutes <= 1 ? 'min' : 'mins'}`,
        );
      }
    }

    if (unitLevel <= 6) {
      const seconds = duration.seconds();
      const asSeconds = Math.floor(duration.asSeconds());
      const numberOfSeconds = unitLevel === 6 ? asSeconds : seconds;
      if (numberOfSeconds) {
        parts.push(
          `${numberOfSeconds} ${numberOfSeconds <= 1 ? 'sec' : 'secs'}`,
        );
      }
    }

    const formattedDuration = parts.join(`${separator} `);
    return formattedDuration;
  }
};
