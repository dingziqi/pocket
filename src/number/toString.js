import { validateNumber } from './msic';

export function thousanify(target) {
    validateNumber(target);

    return String(target).replace(/\d+/, str => {
        return str.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
      })
}