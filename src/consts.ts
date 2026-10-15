// Links used across the site, kept in one place so they're easy to change.

export const REPO_URL = 'https://github.com/CMNLabs/typerutil-site';

// The app's repo is private, so its publish workflow copies each release here. This downloads the zip
// straight from the latest (non-prerelease) release, but the zip's name has the version in it: update
// this after each release.
export const APP_VERSION = '1.0.0';
export const DOWNLOAD_URL = `${REPO_URL}/releases/latest/download/Typer-Util-${APP_VERSION}.zip`;

// Polar checkout for a license; the same link as the app's Buy License button.
export const BUY_URL = 'https://buy.polar.sh/polar_cl_EB3AyXrxE2XbohDXGodLxh2u356hpAD7C9Zuy1UjMiQ';

// The price shown on the header's Buy button, by where the visitor is. Keep these in line with Polar.
export const PRICES = { uk: '£1.99', eu: '€2.29', other: '$2.49' };
// ISO codes of the 27 EU member states, as Cloudflare reports them.
export const EU_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE',
  'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
];

// The site's own bug page, which the app also links to; it sends people on to BUG_REPORT_URL.
export const REPORT_BUG_PAGE = '/report-bug';
export const BUG_REPORT_URL = `${REPO_URL}/issues/new?template=bug_report.yml`;
export const ISSUES_URL = `${REPO_URL}/issues`;
