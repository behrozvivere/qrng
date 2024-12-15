type Messages = {
  metadata: {
    title: {
      template: string;
      default: string;
    };
    description: string;
    keywords: Record<string, string>;
  };
  index: {
    status: {
      title: string;
      subtitle: string;
      google_play: string;
      qr_created: string;
      qr_downloaded: string;
      visitors: string;
      download_count: string;
      generate_count: string;
      page_view: string;
      github_stars: string;
    };
  };
  pricing: {
    title: string;
    description: string;
  };
  qrcodes: {
    correctLevel: {
      label: string;
      description: string;
    };
  };
};

declare interface IntlMessages extends Messages {}
