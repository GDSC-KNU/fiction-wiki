// interface GTagEvent {
//   action: string;
//   category: string;
//   label: string;
//   value: number;
// }

export const GA_TRACKING_ID = "G-GBTWHKP7K0";

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
