import {
  aboutUsPath,
  contactPath,
  euTeDesignPath,
  homePath,
  ourWorkPath,
  servicesPath,
} from "@/constants/paths";

export const NAV_ITEMS: { url: string; name: string; isATag?: boolean }[] = [
  {
    url: homePath(),
    name: "Home",
  },
  {
    url: aboutUsPath(),
    name: "About",
  },

  {
    url: servicesPath(),
    name: "Services",
  },

  {
    url: ourWorkPath(),
    name: "Our work",
    isATag: true,
  },
  {
    url: euTeDesignPath(),
    name: "Eu-Te Design",
  },
  {
    url: contactPath(),
    name: "Contact",
  },
];
