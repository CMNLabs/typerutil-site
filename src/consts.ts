// Links used across the site, kept in one place so they're easy to change.

export const REPO_URL = 'https://github.com/CMNLabs/typerutil-site';

// The app's repo is private, so its publish workflow copies each release here.
// While there are only betas this points at the list of releases, because releases/latest skips
// prereleases. Switch it to `${REPO_URL}/releases/latest` after the first non-beta release.
export const DOWNLOAD_URL = `${REPO_URL}/releases`;

// Polar checkout for a license; the same link as the app's Buy License button.
export const BUY_URL = 'https://buy.polar.sh/polar_cl_EB3AyXrxE2XbohDXGodLxh2u356hpAD7C9Zuy1UjMiQ';

// The site's own bug page, which the app also links to; it sends people on to BUG_REPORT_URL.
export const REPORT_BUG_PAGE = '/report-bug';
export const BUG_REPORT_URL = `${REPO_URL}/issues/new?template=bug_report.yml`;
export const ISSUES_URL = `${REPO_URL}/issues`;
