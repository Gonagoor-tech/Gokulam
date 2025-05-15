
export type NavLinkItem = {
  name: string;
  href: string;
};

export type NavLinkType = {
  name: string;
  href: string;
  hasDropdown?: boolean;
  items?: NavLinkItem[];
};
