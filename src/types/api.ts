export interface Medium {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface SeoMeta {
  content: string;
  type: string;
  value: string;
}

export interface Seo {
  defaultMeta: SeoMeta[];
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: unknown[];
}

export interface ApiData {
  slug: string;
  id: number;
  title: string;
  description: string; // HTML string
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}

export interface ApiResponse {
  data: ApiData;
}
