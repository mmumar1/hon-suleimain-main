import { useEffect } from 'react';
import { siteConfig } from '../constants/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function useSEO({ title, description, image, url }: SEOProps = {}) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
    const pageDescription = description || siteConfig.description;
    const pageImage = image || siteConfig.ogImage;
    const pageUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;

    document.title = pageTitle;

    // Helper to set meta tags safely
    const setMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(`meta[${selector}]`);
      if (!element) {
        element = document.createElement('meta');
        const [attrName, attrValue] = selector.split('=');
        element.setAttribute(attrName, attrValue.replace(/'/g, ''));
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    setMetaTag("name='description'", "content", pageDescription);
    setMetaTag("property='og:title'", "content", pageTitle);
    setMetaTag("property='og:description'", "content", pageDescription);
    setMetaTag("property='og:image'", "content", pageImage);
    setMetaTag("property='og:url'", "content", pageUrl);
    setMetaTag("property='og:type'", "content", "website");

    setMetaTag("name='twitter:card'", "content", "summary_large_image");
    setMetaTag("name='twitter:title'", "content", pageTitle);
    setMetaTag("name='twitter:description'", "content", pageDescription);
    setMetaTag("name='twitter:image'", "content", pageImage);
  }, [title, description, image, url]);
}
