import React from 'react';

/**
 * 
 * 
 * [bloom]
 *   bloom
 *     should launch thermo
 */

/**
 * 
 */
export const isBud = (validatee) => validateBloomable(validatee);
export const validateBloomable = (validatee) => {
  let reply = false;
  do {
    // TODO: g(f(x)
    
    if (Object.keys(validatee).filter(key => validatee[key] === 'appliable')) {
      reply = true;
      break;
    }
    if (canBeBud(validatee)) {
      reply = true;
      break;
    }
    // 例えば梃子
    if (Object.keys(validatee).filter(key => validatee[key] === 'system still does not work')) {
      reply = true;
      break;
    }
  } while (0);
  return reply;
};
