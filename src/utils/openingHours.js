import { STORE } from '../config/store';

function getHourAndMinute(date = new Date()) {
  const parts = new Intl.DateTimeFormat('pt-BR', {
    timeZone: STORE.timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(date);

  const hour = Number(parts.find((part) => part.type === 'hour')?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === 'minute')?.value ?? 0);
  return { hour, minute };
}

export function isStoreOpen(date = new Date()) {
  const { hour, minute } = getHourAndMinute(date);
  const current = hour * 60 + minute;
  return current >= STORE.openHour * 60 && current < STORE.closeHour * 60;
}

export function getStoreStatus(date = new Date()) {
  return isStoreOpen(date)
    ? { open: true, label: 'ABERTO AGORA' }
    : { open: false, label: 'FECHADO' };
}
