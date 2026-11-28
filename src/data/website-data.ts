export interface NavSubMenuItem {
  label: string;
  href: string;
}

export interface NavMenuItem {
  label: string;
  href: string;
  subMenu?: NavSubMenuItem[];
}

export interface PartnerLogo {
  src: string;
  alt: string;
}

export interface ProcessStepItem {
  containerDataId: string;
  widgetDataId: string;
  dataSettings: string;
  icon: "globe" | "sliders";
  title: string;
  description: string;
}

export interface WhyChooseTabItem {
  tabNumber: string;
  idSuffix: string;
  icon: "team" | "analytics" | "solutions" | "success";
  title: string;
  description: string;
  imageSrc: string;
  imageClassName: string;
  defaultSelected: boolean;
}

export interface TechStackItem {
  containerDataId: string;
  containerSettings: string;
  imageWidgetDataId: string;
  headingWidgetDataId: string;
  imageSrc: string;
  wpImageClass: string;
  width: number;
  height: number;
  title: string;
}

export interface CaseStudyItem {
  title: string;
  desc: string;
  href: string;
  mediaType: "image" | "video";
  src: string;
  poster?: string;
}

export interface ServiceRowItem {
  rowDataId: string;
  numColDataId: string;
  numWidgetDataId: string;
  num: string;
  titleColDataId: string;
  titleWidgetDataId: string;
  title: string;
  href: string;
  bodyColDataId: string;
  descWidgetDataId: string;
  description: string;
  listWidgetDataId: string;
  features: string[];
  imgOuterColDataId: string;
  imgInnerColDataId: string;
  imgWidgetDataId: string;
  imgSrc: string;
  wpImageClass: string;
}

export interface TestimonialItem {
  topText: string;
  feedback: string;
  avatarSrc: string;
  name: string;
  designation: string;
}

export interface AmbassadorVideoItem {
  widgetDataId: string;
  dataSpeed: string;
  videoSrc: string;
  poster: string;
  title: string;
  href: string;
  designation: string;
}

export interface FaqItem {
  idSuffix: string;
  indexKey: string;
  defaultActive: "yes" | "";
  question: string;
  answer: string;
}

export interface BlogArticleItem {
  articleClass: string;
  href: string;
  thumbAriaLabel: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  wpImageClass: string;
  imgAlt: string;
  sizes: string;
  title: string;
  excerpt: string;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface SocialLinkItem {
  label: string;
  href: string;
  repeaterClass: string;
  icon: "facebook" | "twitter" | "youtube" | "linkedin";
}

export const NAV_MENU_ITEMS: NavMenuItem[] = [
  { label: "Home", href: "#hero" },
  {
    label: "Services",
    href: "#services",
    subMenu: [
      { label: "Paid Marketing", href: "https://nomaddigitalbd.com/paid-marketing" },
      { label: "SEO Services", href: "https://nomaddigitalbd.com/seo-service" },
      { label: "Web Development", href: "https://nomaddigitalbd.com/web-development" },
      {
        label: "Conversion Rate Optimization (CRO)",
        href: "https://nomaddigitalbd.com/cro",
      },
      { label: "Web Analytics", href: "https://nomaddigitalbd.com/web-analytics" },
      { label: "Graphics Design", href: "https://nomaddigitalbd.com/graphics-design" },
    ],
  },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export const HERO_SIDEBAR_ITEMS: string[] = [
  "Dhaka Agency",
  "Growth-Driven",
  "Marketing &",
  "Development",
];

export const PARTNER_LOGOS: PartnerLogo[] = [
  { src: "/assets/images/nomad/partner-1.png", alt: "Dhaka Agency Partner 1" },
  { src: "/assets/images/nomad/partner-2.png", alt: "Dhaka Agency Partner 2" },
  { src: "/assets/images/nomad/partner-3.png", alt: "Dhaka Agency Partner 3" },
  { src: "/assets/images/nomad/partner-4.png", alt: "Dhaka Agency Partner 4" },
  { src: "/assets/images/nomad/partner-5.png", alt: "Dhaka Agency Partner 5" },
  { src: "/assets/images/nomad/partner-6.png", alt: "Dhaka Agency Partner 6" },
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    containerDataId: "0d9d65e",
    widgetDataId: "f0a07b8",
    dataSettings:
      '{"wcf-animation":"fade","aae_method":"from","aae_trigger":"on_scroll","delay":0.15,"fade-from":"bottom","data-duration":1.5,"ease":"power2.out","fade-offset":50}',
    icon: "globe",
    title: "Audit & Discovery",
    description:
      "We audit your ad channels, SEO technical health, and conversion funnels to uncover immediate revenue bottlenecks.",
  },
  {
    containerDataId: "b70cbf3",
    widgetDataId: "5079cab",
    dataSettings:
      '{"wcf-animation":"fade","delay":0.25,"aae_method":"from","aae_trigger":"on_scroll","fade-from":"bottom","data-duration":1.5,"ease":"power2.out","fade-offset":50}',
    icon: "globe",
    title: "Growth Blueprint",
    description:
      "Our team architects a custom multi-channel strategy with buyer personas, messaging frameworks, and KPI benchmarks.",
  },
  {
    containerDataId: "d782076",
    widgetDataId: "3c1089b",
    dataSettings:
      '{"wcf-animation":"fade","delay":0.35,"aae_method":"from","aae_trigger":"on_scroll","fade-from":"bottom","data-duration":1.5,"ease":"power2.out","fade-offset":50}',
    icon: "sliders",
    title: "Agile Scale & ROI",
    description:
      "We deploy campaigns and web builds, run multivariate A/B tests, eliminate ad waste, and report real-time ROI.",
  },
];

export const WHY_CHOOSE_TABS: WhyChooseTabItem[] = [
  {
    tabNumber: "1",
    idSuffix: "7241",
    icon: "team",
    title: "Remote Expert Team",
    description:
      "Work with top digital marketing, design, and development professionals from across Bangladesh.",
    imageSrc: "/assets/images/nomad/service-web.jpg",
    imageClassName: "alignnone wp-image-993 size-full",
    defaultSelected: true,
  },
  {
    tabNumber: "2",
    idSuffix: "7242",
    icon: "analytics",
    title: "Data-Driven Strategies",
    description:
      "We use Google Analytics, heatmaps, and conversion tracking to maximize every dollar of your ROI.",
    imageSrc: "/assets/images/nomad/service-analytics.jpg",
    imageClassName: "alignnone wp-image-2991 size-full",
    defaultSelected: false,
  },
  {
    tabNumber: "3",
    idSuffix: "7243",
    icon: "solutions",
    title: "Customized Solutions",
    description:
      "Tailored Paid Ads, SEO, CRO, and custom web development strategies built for your unique business goals.",
    imageSrc: "/assets/images/nomad/service-cro.jpg",
    imageClassName: "alignnone wp-image-2992 size-full",
    defaultSelected: false,
  },
  {
    tabNumber: "4",
    idSuffix: "7244",
    icon: "success",
    title: "Proven Success",
    description:
      "Over $15M+ client revenue scaled, 98.4% client retention, and 250+ completed global projects.",
    imageSrc: "/assets/images/nomad/service-paid.png",
    imageClassName: "alignnone wp-image-2993 size-full",
    defaultSelected: false,
  },
];

export const TECH_STACK_ITEMS: TechStackItem[] = [
  {
    containerDataId: "865812d",
    containerSettings:
      '{"wcf_enable_cursor_hover_effect_text":"View","wcf-animation":"fade","delay":0.45,"fade-from":"right","aae_method":"from","aae_trigger":"on_scroll","data-duration":1.5,"ease":"power2.out","fade-offset":50,"wcf_enable_pin_area":"no","aae_enable_header_sticky_area":"no","wcf_enable_horizontal_scroll":"no"}',
    imageWidgetDataId: "9d412d6",
    headingWidgetDataId: "1edf080",
    imageSrc: "/assets/images/wordpress.webp",
    wpImageClass: "wp-image-45",
    width: 100,
    height: 100,
    title: "WordPress",
  },
  {
    containerDataId: "effd66d",
    containerSettings:
      '{"wcf_enable_cursor_hover_effect_text":"View","wcf-animation":"fade","delay":0.3,"fade-from":"right","aae_method":"from","aae_trigger":"on_scroll","data-duration":1.5,"ease":"power2.out","fade-offset":50,"wcf_enable_pin_area":"no","aae_enable_header_sticky_area":"no","wcf_enable_horizontal_scroll":"no"}',
    imageWidgetDataId: "a7325ca",
    headingWidgetDataId: "9fb7d3a",
    imageSrc: "/assets/images/react.webp",
    wpImageClass: "wp-image-28",
    width: 116,
    height: 120,
    title: "Next.js & React",
  },
  {
    containerDataId: "efdc37a",
    containerSettings:
      '{"wcf_enable_cursor_hover_effect_text":"View","wcf-animation":"fade","aae_method":"from","aae_trigger":"on_scroll","delay":0.15,"fade-from":"bottom","data-duration":1.5,"ease":"power2.out","fade-offset":50,"wcf_enable_pin_area":"no","aae_enable_header_sticky_area":"no","wcf_enable_horizontal_scroll":"no"}',
    imageWidgetDataId: "685f703",
    headingWidgetDataId: "7465f3e",
    imageSrc: "/assets/images/node.webp",
    wpImageClass: "wp-image-20",
    width: 88,
    height: 100,
    title: "Node.js",
  },
  {
    containerDataId: "f8879dc",
    containerSettings:
      '{"wcf_enable_cursor_hover_effect_text":"View","wcf-animation":"fade","delay":0.3,"fade-from":"left","aae_method":"from","aae_trigger":"on_scroll","data-duration":1.5,"ease":"power2.out","fade-offset":50,"wcf_enable_pin_area":"no","aae_enable_header_sticky_area":"no","wcf_enable_horizontal_scroll":"no"}',
    imageWidgetDataId: "8ef6240",
    headingWidgetDataId: "a56aafa",
    imageSrc: "/assets/images/flutter.webp",
    wpImageClass: "wp-image-14",
    width: 80,
    height: 100,
    title: "Meta & Google",
  },
  {
    containerDataId: "d8da3be",
    containerSettings:
      '{"wcf_enable_cursor_hover_effect_text":"View","wcf-animation":"fade","delay":0.45,"fade-from":"left","aae_method":"from","aae_trigger":"on_scroll","data-duration":1.5,"ease":"power2.out","fade-offset":50,"wcf_enable_pin_area":"no","aae_enable_header_sticky_area":"no","wcf_enable_horizontal_scroll":"no"}',
    imageWidgetDataId: "26620eb",
    headingWidgetDataId: "58450b4",
    imageSrc: "/assets/images/redux.webp",
    wpImageClass: "wp-image-30",
    width: 106,
    height: 100,
    title: "GA4 & CRO",
  },
];

export const CASE_STUDIES_ROW_ONE: CaseStudyItem[] = [
  {
    title: "Aura Apparel",
    desc: "Paid Ads · $3.2M+ Revenue (+340% ROAS)",
    href: "#",
    mediaType: "image",
    src: "/assets/images/nomad/blog-paid.webp",
  },
  {
    title: "FlowMetrics AI",
    desc: "SEO · +520% Organic Traffic & 12x Leads",
    href: "#",
    mediaType: "image",
    src: "/assets/images/nomad/blog-seo.webp",
  },
  {
    title: "PayGrid Global",
    desc: "Next.js Web Dev · 0.4s Speed (+85% Conv.)",
    href: "#",
    mediaType: "video",
    src: "https://sgp1.digitaloceanspaces.com/hafsnitcontent/videos/0509-1747336236402.mp4",
    poster: "/assets/images/nomad/service-paid.png",
  },
  {
    title: "HealthPulse",
    desc: "CRO Overhaul · +210% Conversion Lift",
    href: "#",
    mediaType: "image",
    src: "/assets/images/nomad/blog-cro.webp",
  },
  {
    title: "Data Intelligence",
    desc: "Web Analytics · GA4 & Attribution",
    href: "#",
    mediaType: "image",
    src: "/assets/images/nomad/blog-analytics.webp",
  },
];

export const CASE_STUDIES_ROW_TWO: CaseStudyItem[] = [
  {
    title: "Brand Identity",
    desc: "Graphics & UI/UX · Strategic Visuals",
    href: "#",
    mediaType: "image",
    src: "/assets/images/nomad/blog-graphics.webp",
  },
  {
    title: "Performance Ads",
    desc: "Meta & Google Ads · 4.2x Avg ROAS",
    href: "#",
    mediaType: "image",
    src: "/assets/images/nomad/service-paid.png",
  },
  {
    title: "Search Dominance",
    desc: "Technical & Content SEO Architecture",
    href: "#",
    mediaType: "image",
    src: "/assets/images/nomad/service-seo.jpg",
  },
  {
    title: "Web Engineering",
    desc: "WordPress, Shopify & Custom Builds",
    href: "#",
    mediaType: "image",
    src: "/assets/images/nomad/service-web.jpg",
  },
  {
    title: "Funnel CRO",
    desc: "A/B Testing & Checkout Optimization",
    href: "#",
    mediaType: "image",
    src: "/assets/images/nomad/service-cro.jpg",
  },
];

export const SERVICE_ROWS: ServiceRowItem[] = [
  {
    rowDataId: "1f956d9",
    numColDataId: "f8fe1ca",
    numWidgetDataId: "9d95ca6",
    num: "01.",
    titleColDataId: "0bd59b2",
    titleWidgetDataId: "3bb7a4a",
    title: "Paid Marketing (Meta & Google Ads)",
    href: "https://nomaddigitalbd.com/paid-marketing",
    bodyColDataId: "aac43e5",
    descWidgetDataId: "9650e77",
    description:
      "Boost your sales with high-converting Google Ads, Facebook & Instagram campaigns, and precision conversion tracking.",
    listWidgetDataId: "606a509",
    features: [
      "Google Ads Management",
      "Facebook & Instagram Ads",
      "Conversion Tracking & Optimization",
    ],
    imgOuterColDataId: "793d6bb",
    imgInnerColDataId: "1ba572b",
    imgWidgetDataId: "bd0d350",
    imgSrc: "/assets/images/nomad/service-paid.png",
    wpImageClass: "wp-image-31",
  },
  {
    rowDataId: "bdfc149",
    numColDataId: "0b7020a",
    numWidgetDataId: "c40df8e",
    num: "02.",
    titleColDataId: "ba72a2e",
    titleWidgetDataId: "45fc7c7",
    title: "SEO & Search Engine Dominance",
    href: "https://nomaddigitalbd.com/seo-service",
    bodyColDataId: "dcbc384",
    descWidgetDataId: "b53a265",
    description:
      "Rank higher on Google and drive consistent, high-intent organic traffic with white-hat on-page, off-page, and technical SEO.",
    listWidgetDataId: "94c8a5f",
    features: [
      "On-Page & Off-Page SEO",
      "Keyword Research & Content Strategy",
      "Technical SEO Audit",
    ],
    imgOuterColDataId: "f97d79b",
    imgInnerColDataId: "a6854b9",
    imgWidgetDataId: "bef343c",
    imgSrc: "/assets/images/nomad/service-seo.jpg",
    wpImageClass: "wp-image-32",
  },
  {
    rowDataId: "4d6b8ae",
    numColDataId: "4aa7ace",
    numWidgetDataId: "598d1ab",
    num: "03.",
    titleColDataId: "bdde1b5",
    titleWidgetDataId: "b4ebd2a",
    title: "High-Performance Web Development",
    href: "https://nomaddigitalbd.com/web-development",
    bodyColDataId: "0b60200",
    descWidgetDataId: "50b2fdd",
    description:
      "Build a powerful, lightning-fast online presence with custom Next.js, WordPress, or Shopify websites built to convert.",
    listWidgetDataId: "9ded5b8",
    features: [
      "WordPress, Shopify & Custom Sites",
      "Mobile-Responsive Design",
      "Landing Pages & E-Commerce",
    ],
    imgOuterColDataId: "c1a0e61",
    imgInnerColDataId: "2c1362e",
    imgWidgetDataId: "71d1833",
    imgSrc: "/assets/images/nomad/service-web.jpg",
    wpImageClass: "wp-image-33",
  },
  {
    rowDataId: "9b8cf00",
    numColDataId: "5130607",
    numWidgetDataId: "75bee97",
    num: "04.",
    titleColDataId: "9b20ff7",
    titleWidgetDataId: "8a631cc",
    title: "CRO, Analytics & Brand Design",
    href: "https://nomaddigitalbd.com/cro",
    bodyColDataId: "3b371c5",
    descWidgetDataId: "36867f0",
    description:
      "Turn more clicks into loyal customers with A/B testing, GA4 heatmap intelligence, and strategic brand identity design.",
    listWidgetDataId: "da0159a",
    features: [
      "A/B Testing & Funnel Optimization",
      "GA4 & Heatmap Analytics",
      "Logo, Social & UI/UX Design",
    ],
    imgOuterColDataId: "2ab2158",
    imgInnerColDataId: "2bbe53b",
    imgWidgetDataId: "f972c3f",
    imgSrc: "/assets/images/nomad/service-cro.jpg",
    wpImageClass: "wp-image-34",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    topText: "5.0 Verified Review",
    feedback:
      "Their Google Ads strategy was a total game-changer for my business. The ad creatives were well-written, the targeting was spot-on, and the results exceeded expectations.",
    avatarSrc: "/assets/images/nomad/nomad-avatar.png",
    name: "kurt_r_fludd",
    designation: "Verified Client · Google Ads",
  },
  {
    topText: "5.0 Verified Review",
    feedback:
      "From keyword optimization to ad placement, every aspect of the Google Ads campaign was handled perfectly. The results were immediate, and my business saw a noticeable boost in traffic and sales!",
    avatarSrc: "/assets/images/nomad/nomad-avatar.png",
    name: "robert_e_reed",
    designation: "Verified Client · Paid Marketing",
  },
  {
    topText: "5.0 Verified Review",
    feedback:
      "Exceptional Website Development – Highly Recommended! They built my site with absolute professionalism, paying attention to every detail and ensuring a sleek, high-performing design.",
    avatarSrc: "/assets/images/nomad/nomad-avatar.png",
    name: "mayjava",
    designation: "Verified Client · Web Development",
  },
  {
    topText: "5.0 Verified Review",
    feedback:
      "This team made the entire process seamless and stress-free. The final website exceeded my expectations in both functionality and design. Responsive, flexible, and exceptional results.",
    avatarSrc: "/assets/images/nomad/nomad-avatar.png",
    name: "jcleblanc",
    designation: "Verified Client · Web Design",
  },
];

export const AMBASSADOR_VIDEOS: AmbassadorVideoItem[] = [
  {
    widgetDataId: "f226b8d",
    dataSpeed: "0.9",
    videoSrc:
      "https://sgp1.digitaloceanspaces.com/hafsnitcontent/videos/0509-1747336236402.mp4",
    poster: "/assets/images/nomad/service-paid.png",
    title: "Hi, I'm Reggy",
    href: "https://nomaddigitalbd.com/",
    designation: "Ambassador · Frankfurt, Germany",
  },
  {
    widgetDataId: "f308db8",
    dataSpeed: "1.1",
    videoSrc:
      "https://sgp1.digitaloceanspaces.com/hafsnitcontent/videos/Vid--1744601813338.mp4",
    poster: "/assets/images/nomad/service-seo.jpg",
    title: "Viral Direct Booking",
    href: "https://www.kharabanda.com/vdbm1",
    designation: "Hospitality Growth Method",
  },
  {
    widgetDataId: "563650a",
    dataSpeed: "0.9",
    videoSrc:
      "https://sgp1.digitaloceanspaces.com/hafsnitcontent/videos/Vid--1744602527029.mp4",
    poster: "/assets/images/nomad/service-web.jpg",
    title: "Hotel Marketing Mastery",
    href: "https://www.kharabanda.com/hotel-marketing-management-mastery--ec221",
    designation: "Management & Direct Revenue",
  },
  {
    widgetDataId: "41e319c",
    dataSpeed: "1.1",
    videoSrc:
      "https://sgp1.digitaloceanspaces.com/hafsnitcontent/videos/Vid--1744602910918.mp4",
    poster: "/assets/images/nomad/service-analytics.jpg",
    title: "Become an Action Taker",
    href: "https://www.skool.com/become-an-action-taker-7388",
    designation: "Growth Coaching Community",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    idSuffix: "5791",
    indexKey: "374aed0_0",
    defaultActive: "yes",
    question: "Do you have Google Ads certification?",
    answer:
      "Yes, our team includes certified Google Ads professionals with years of hands-on experience managing high-ROI campaigns globally.",
  },
  {
    idSuffix: "5792",
    indexKey: "374aed0_1",
    defaultActive: "",
    question: "Will you provide keyword research?",
    answer:
      "Absolutely! We conduct thorough keyword research, search volume analysis, and competitor mapping for all Paid Ads and SEO campaigns.",
  },
  {
    idSuffix: "5793",
    indexKey: "374aed0_2",
    defaultActive: "",
    question: "Do you offer ongoing monthly management?",
    answer:
      "Yes, we provide both short-term and ongoing monthly campaign management with transparent ROI reporting dashboards.",
  },
  {
    idSuffix: "5794",
    indexKey: "374aed0_3",
    defaultActive: "",
    question: "Can you set up ads in any language or region?",
    answer:
      "Yes, we create, localize, and target Google and Meta ad campaigns globally based on your target audience and markets.",
  },
  {
    idSuffix: "5795",
    indexKey: "374aed0_4",
    defaultActive: "",
    question: "Will you install the Facebook Pixel & GA4 tracking?",
    answer:
      "Yes, we implement Meta Pixel, Google Analytics 4, and Google Ads conversion tracking via Google Tag Manager with full precision.",
  },
  {
    idSuffix: "5796",
    indexKey: "374aed0_5",
    defaultActive: "",
    question: "What is the difference between on-page and off-page SEO?",
    answer:
      "On-page SEO focuses on optimizing elements within your website (content, meta tags, headings, and internal links). Off-page SEO builds domain authority through quality backlinks from trustworthy websites.",
  },
  {
    idSuffix: "5797",
    indexKey: "374aed0_6",
    defaultActive: "",
    question: "Are the backlinks you build safe and Google-friendly?",
    answer:
      "Yes! We only build backlinks from relevant, trustworthy sources using white-hat SEO techniques that align with Google’s guidelines.",
  },
  {
    idSuffix: "5798",
    indexKey: "374aed0_7",
    defaultActive: "",
    question: "Can I provide my own keywords or pages to optimize?",
    answer:
      "Absolutely! You’re welcome to share target keywords, priority pages, or specific business goals—we tailor every strategy to your needs.",
  },
];

export const BLOG_ARTICLES: BlogArticleItem[] = [
  {
    articleClass:
      "wcf-post post-1714 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized",
    href: "https://nomaddigitalbd.com/blogs/paid-marketing",
    thumbAriaLabel: "arolax development tech agency we talent meet opportunity",
    imgSrc: "/assets/images/nomad/blog-paid.webp",
    imgWidth: 360,
    imgHeight: 455,
    wpImageClass: "wp-image-10",
    imgAlt: "Paid Marketing: The Fastest Way to Drive Traffic and Sales for Your Business",
    sizes: "(max-width: 360px) 100vw, 360px",
    title:
      "Paid Marketing: The Fastest Way to Drive Traffic and Sales for Your Business",
    excerpt:
      "In today’s fast-paced digital world, waiting months for organic growth isn’t always an option—that’s where Paid Marketing becomes a game-changer.",
  },
  {
    articleClass:
      "wcf-post post-1712 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized",
    href: "https://nomaddigitalbd.com/blogs/web-analytics",
    thumbAriaLabel: "Digital Marketing Insights & Growth Guides",
    imgSrc: "/assets/images/nomad/blog-analytics.webp",
    imgWidth: 330,
    imgHeight: 180,
    wpImageClass: "wp-image-9",
    imgAlt: "Web Analytics: Turn Data Into Growth for Your Business",
    sizes: "(max-width: 330px) 100vw, 330px",
    title: "Web Analytics: Turn Data Into Growth for Your Business",
    excerpt:
      "Web analytics tracks, measures, and analyzes visitor behavior—from page views and bounce rates to conversion funnels and user journeys.",
  },
  {
    articleClass:
      "wcf-post post-1 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized",
    href: "https://nomaddigitalbd.com/blogs/seo-service",
    thumbAriaLabel: "Digital Marketing Insights & Growth Guides",
    imgSrc: "/assets/images/nomad/blog-seo.webp",
    imgWidth: 365,
    imgHeight: 280,
    wpImageClass: "wp-image-11",
    imgAlt: "SEO Services: Get Found, Build Trust, and Grow Organically",
    sizes: "(max-width: 365px) 100vw, 365px",
    title: "SEO Services: Get Found, Build Trust, and Grow Organically",
    excerpt:
      "Visibility equals credibility. At Dhaka Agency, we deliver strategic SEO that helps your website rank higher, attract organic traffic, and build authority.",
  },
];

export const FOOTER_LINKS: FooterLinkItem[] = [
  { label: "About Us", href: "https://nomaddigitalbd.com/about-us" },
  { label: "Case Studies", href: "https://nomaddigitalbd.com/case-studies" },
  { label: "Privacy Policy", href: "https://nomaddigitalbd.com/privacy-policy" },
  { label: "Terms & Conditions", href: "https://nomaddigitalbd.com/terms" },
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    label: "Facebook",
    href: "#",
    repeaterClass: "elementor-repeater-item-4daa8b5",
    icon: "facebook",
  },
  {
    label: "Twitter",
    href: "#",
    repeaterClass: "elementor-repeater-item-44a56cd",
    icon: "twitter",
  },
  {
    label: "Youtube",
    href: "#",
    repeaterClass: "elementor-repeater-item-666096d",
    icon: "youtube",
  },
  {
    label: "Linkedin",
    href: "#",
    repeaterClass: "elementor-repeater-item-45b62ec",
    icon: "linkedin",
  },
];
