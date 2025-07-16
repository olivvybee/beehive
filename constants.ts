export const FEDI_USERNAME = '@olivvybee@anarres.family';

export const [_, FEDI_HANDLE, FEDI_INSTANCE] = FEDI_USERNAME.split('@');
export const FEDI_URL = `https://${FEDI_INSTANCE}/@${FEDI_HANDLE}`;
