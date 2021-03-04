export const GA_ID = process.env.NEXT_PUBLIC_GA_KEY;

interface customWindow extends Window {
  gtag: any
}

declare const window: customWindow;

export const pageview = (url: string): void => {
  window.gtag("config", GA_ID, {
    page_path: url,
  })
}

export const trackClick = ({ category }: any): void => {
  window.gtag("event", {
    event_category: category
  })
}